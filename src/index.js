import express from "express";
import { engine } from "express-handlebars";

import MethodOverride from "method-override";

import path from "path";
import { fileURLToPath } from "url";

import morgan from "morgan";
import route from "./routes/index.js";

import db from "./config/db/index.js";
import SortMiddleware from "./app/middleware/SortMiddleware.js";
// Connect to DB
db.connect()

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Dùng Middle Ware
app.use(
  express.urlencoded({
    extended: true,
  })
); // Xử lý dữ liệu từ FORM gửi lên cho server

app.use(express.json()); // Xử lý dữ liệu từ client gửi lên server (gửi từ dạng javascript lên)
// VD: XMLHttpRequest, fetch, axios, ajax...

// Sort Middleware
app.use(SortMiddleware)

// Static File
app.use(express.static(path.join(__dirname, "public")));

// HTTP logger: xem thong bao thay doi
// app.use(morgan('combined'))


//
app.use(MethodOverride('_method'))

// Teamplate Engine
app.engine(
  ".hbs",
  engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
      sortable: (field, sort) => {

        const sortType = field === sort.column ? sort.type : 'default'

        const icons = {
          default: 'oi oi-elevator',
          asc: 'oi oi-sort-ascending',
          desc: 'oi oi-sort-descending'
        }

        const types = {
          default: 'desc',
          asc: 'desc',
          desc: 'asc'
        }

        const icon = icons[sortType]
        const type = types[sortType]


        return `<a href="?_sort&column=${field}&type=${type}"><span class="${icon}"></span></a>`
      }
    }
  })
);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources/views"));

// Routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
