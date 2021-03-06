// 홈페이지를 파일로 분리
var express = require('express');
var router = express.Router();  // express의 Router 메소드 호출
var template = require('../lib/template.js');

router.get('/', function(request, response) {  
    var title = 'Welcome';
    var description = 'Hello, Node.js';
    var list = template.list(request.list);
    var html = template.html(title, list, `<h2>${title}</h2>${description}<img src="/images/hello.png" style="width:300px; display:block; margin:10px;"> 
    `,`<a href="topic/create">create</a>`);
    response.send(html);
});  
module.exports = router;