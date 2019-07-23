import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "./assets/styles/index.less";
import iView from "iview";

Vue.use(iView, {
  select: {
    customArrow: "i-td i-td-arrow_drop_down_px",
    arrowSize: 24
  },
  datePicker: {
    customIcon: "i-td i-td-date"
  },
  menu: {
    customArrow: "i-td i-td-keyboard_arrow_down_",
    arrowSize: 24
  }
});

import "td-component";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
