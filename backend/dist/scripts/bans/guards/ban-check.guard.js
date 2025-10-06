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
exports.BanCheckGuard = void 0;
const common_1 = require("@nestjs/common");
const bans_service_1 = require("../bans.service");
let BanCheckGuard = class BanCheckGuard {
    bansService;
    constructor(bansService) {
        this.bansService = bansService;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        if (!user || !user.id) {
            return true;
        }
        const isBanned = await this.bansService.isUserBanned(user.id);
        if (isBanned) {
            const banDetails = await this.bansService.getBanByUserId(user.id);
            throw new common_1.ForbiddenException({
                message: 'Your account has been banned',
                banDetails: banDetails.banDetails,
            });
        }
        return true;
    }
};
exports.BanCheckGuard = BanCheckGuard;
exports.BanCheckGuard = BanCheckGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [bans_service_1.BansService])
], BanCheckGuard);
//# sourceMappingURL=ban-check.guard.js.map