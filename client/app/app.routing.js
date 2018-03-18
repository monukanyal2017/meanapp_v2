"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./components/dashboard.component");
var login_component_1 = require("./components/login.component");
//import { AuthGuard } from './_guards/index';
var appRoutes = [
    // { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: '', component: login_component_1.LoginComponent }
    // otherwise redirect to home
    // { path: '**', redirectTo: '' }
];
//export const routing = RouterModule.forRoot(appRoutes);
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map