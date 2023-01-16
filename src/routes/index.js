import newsRouter from "./news.js";
import siteRouter from "./site.js";
import coursesRouter from "./course.js"
import meRouter from "./me.js"

function route(app) {
  app.use("/news", newsRouter);

  app.use("/courses", coursesRouter);

  app.use("/me", meRouter);

  app.use("/", siteRouter);

}

export default route;
