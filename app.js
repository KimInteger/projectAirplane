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
      filePath = './public.index.html';
    } else if(url.endsWith('.js')) {
      filePath = `./public/script${url}`;
    } else if(url.endsWith('css')) {
      filePath = `./public/CSS${url}`;
    } else {
      return;
    }
    return filePath;
  },
  getExtention : function(filePath){
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