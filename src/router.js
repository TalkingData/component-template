import Vue from "vue";
import Router from "vue-router";
import cardList from "./views/cardList/index.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      redirect: "/stepsVerticalHorizontal"
    },
    {
      path: "/cardList",
      name: "cardList",
      component: cardList
    },
    {
      path: "/personalInformation",
      name: "personalInformation",
      component: () => import("./views/personalInformation/index.vue")
    },
    // 标准表格
    {
      path: "/standardForm",
      name: "standardForm",
      component: () => import("./views/standardForm/index.vue")
    },
    {
      path: "/dropdown",
      name: "dropdown",
      component: () => import("./views/dropdown/index.vue")
    },

    {
      path: "/stepsVerticalRow",
      name: "stepsVerticalRow",
      component: () => import("./views/stepsVerticalRow/index.vue")
    },
    {
      path: "/stepsVerticalHorizontal",
      name: "stepsVerticalHorizontal",
      component: () => import("./views/stepsVerticalHorizontal/index.vue")
    }
  ]
});
