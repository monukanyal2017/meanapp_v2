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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var ApiService = /** @class */ (function () {
    function ApiService(_http) {
        this._http = _http;
        this.client_id = 'c8b1b7dc7749635f177e';
        this.client_secret = '7b158c57b65829ac4d590056a96483871a7c7c92';
        console.log('-->API Service component is Ready...');
        this.endpoint = "http://localhost:8080/";
        this.username = 'monukanyal';
    }
    ApiService.prototype.VerifyUser = function (parameters) {
        var api = this.endpoint + 'apilogin';
        console.log(this.endpoint + 'apilogin');
        console.log(parameters);
        // return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
        //.map(res => res.json());
        var data = new http_1.URLSearchParams();
        data.append('username', parameters.email);
        data.append('password', parameters.password);
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(api, data, options)
            .map(function (res) { return res.json(); });
        //.catch(this.handleError);
    };
    ApiService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map