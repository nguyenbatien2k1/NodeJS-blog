import newsRouter from "./news.js";
import siteRouter from "./site.js";

function route(app) {
  app.use("/news", newsRouter);

  app.use("/search", siteRouter);

  app.use("/", newsRouter);

}

export default route;
