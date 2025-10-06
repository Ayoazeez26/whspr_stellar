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
exports.CreateReferralDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateReferralDto {
    referralCode;
    refereeId;
}
exports.CreateReferralDto = CreateReferralDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The referral code used by the new user' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(6, 20),
    __metadata("design:type", String)
], CreateReferralDto.prototype, "referralCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID of the user being referred' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateReferralDto.prototype, "refereeId", void 0);
//# sourceMappingURL=create-referral.dto.js.map