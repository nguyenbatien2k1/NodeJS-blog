import newsRouter from "./news.js";
import siteRouter from "./site.js";
import coursesRouter from "./course.js"

function route(app) {
  app.use("/news", newsRouter);

  app.use("/courses", coursesRouter);

  app.use("/", siteRouter);

}

export default route;
