// ROOT ROUTER
import UserRouter from './user.router';
import MapRouter from './map.router';

class RootRouter {
    static routes(app) {

        // 用户信息
        UserRouter.routers(app);

        // 
        MapRouter.routers(app);

    }
}

export default RootRouter;