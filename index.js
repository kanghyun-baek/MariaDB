var express = require('express');
var app = express();
var logger = require('morgan');
import path from "path";

// router 설정
import rootRouter from "./routers/rootRouter";

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// view 경로 설정
app.set('views', __dirname + '/views');

// 화면 engine을 ejs로 설정
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// 기본 path를 /public으로 설정(css, javascript 등의 파일 사용을 위해)
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/css'));
app.use(express.static(path.join(__dirname,'/')));



app.use('/', rootRouter);
const handleListening =() => console.log("Server listening on port: 🙄")
app.listen(5000, handleListening)


/*
const db = mariadb.connection;

const handleOpen = () => console.log("✅ Connected to DB");
const handleError = (error) => console.log("❌ DB Error", error);

db.on("error", handleError);
db.once("open", handleOpen);
*/


export default app;
 




