const Router = require("koa-router");
const requireDirectory = require("require-directory");

class InitManager {
  // 入口方法
  static initCore(app) {
    InitManager.app = app;
    InitManager.initLoadRoutes();
  }

  // 自动注册路由
  static initLoadRoutes() {
    function whenLoadModule(obj) {
      if (obj instanceof Router) {
        InitManager.app.use(obj.routes());
      }
    }
    const apiDirectory = `${process.cwd()}/app/api`;
    requireDirectory(module, apiDirectory, {
      visit: whenLoadModule,
    });
  }
}

module.exports = InitManager;
