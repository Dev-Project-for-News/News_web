import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/news",
      name: "news",
      component: () => import("./components/NewsList")
    },
	{
      path: "/:id",
      name: "news-details",
      component: () => import("./components/News")
    },
    {
      path: "/news/create",
      name: "create-news",
      component: () => import("./components/CreateNews")
    }
  ]
});