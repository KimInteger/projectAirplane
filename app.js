const http = require('node:http');

const fs = require('node:fs');

const path = require('node:path');

const mimeType = {
  '.html' : 'text/html; charset=UTF-8',
  '.css' : 'text/css; charset=UTF-8',
  '.js' : 'application/javascript; charset=UTF-8',
  '.json' : 'application/json; charset=UTF-8',
  '.ico' : 'img/x-icon'
};

const fileUtills = {
  getFilepath : function(url){
    let filePath = '';
    if(url === '/'){
      filePath = './public/index.html';
    } else if(url.endsWith('.js')) {
      filePath = `./public${url}`;
    } else if(url.endsWith('css')) {
      filePath = `./public${url}`;
    } else if (url === '/favicon.ico') {
      filePath = '/favicon.ico';
    } else {
      return
    }
    return filePath;
  },
  getExtention : function(filePath){
    if(filePath === '/favicon.ico'){
      return;
    }
    let ext = path.extname(filePath);
    return ext.toLowerCase();
  },
  getContentType : function(ext){
    let contentType = '';
    if(mimeType.hasOwnProperty(ext)){
      contentType = mimeType[ext];
    } else {
      contentType = 'text/plain; charset=UTF-8';
    }
    return contentType;
  }
};

function notFound(res){
  res.writeHead(404,{"Content-Type":"text/plain;charset=UTF-8"});
  res.end('페이지를 찾을 수 없습니다.');
}

function connectError(res){
  res.writeHead(500,{"Content-Type":"text/plain;charset=UTF-8"});
  res.end('서버 연결 오류');
}

const server = http.createServer((req,res)=>{
  if(req.method === 'GET'){
    let filePath = fileUtills.getFilepath(req.url);
    console.log(filePath);
  
    let ext = fileUtills.getExtention(filePath);
    
    let contentType = fileUtills.getContentType(ext);
    if(req.url === '/favicon.ico'){
      return;
    } else {
      fs.readFile(filePath,(err,data)=>{
        if(err){
          connectError(res);
          return;
        } else {
          res.writeHead(200, {"Content-Type": contentType});
          res.end(data);
        }
      });
    }
  } else {
    notFound(res);
  }
});

server.listen(3000,(err)=>{
  if(err){
    console.error(err);
  } else {
    console.log('서버 가동중');
    console.log(`http://localhost:3000`);
  }
});