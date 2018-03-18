"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var api_service_1 = require("../services/api.service");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_ApiService, router) {
        this._ApiService = _ApiService;
        this.router = router;
        this.loading = true; //it will show loader 
        this.loading = false;
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            //return true;
            console.log('user logged in already');
            console.log('should redirect to dashboard');
        }
    }
    LoginComponent.prototype.onSubmit = function (form, route, state) {
        var _this = this;
        this.loading = true;
        console.log('event working');
        console.log(form.value.email);
        //console.log(form.value.password);
        this._ApiService.VerifyUser(form.value).subscribe(function (user) {
            console.log(user);
            console.log(user.auth);
            if (user.auth == false) {
                console.log('user does not exist');
                _this.loading = false;
            }
            else {
                console.log(user.result);
                console.log(user.token);
                localStorage.setItem('currentUser', user.result);
                localStorage.setItem('token', user.token);
                _this.loading = false;
                _this.router.navigate(['/dashboard']);
                ;
            }
            //this.user=user;
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login',
            //template: '<h1>My First Angular App</h1>'
            templateUrl: 'login.component.html',
            providers: [api_service_1.ApiService]
        }),
        __metadata("design:paramtypes", [api_service_1.ApiService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map