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
exports.CreateKycDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const kyc_entity_1 = require("../entities/kyc.entity");
class CreateKycDto {
    userId;
    status;
    verificationLevel;
    notes;
}
exports.CreateKycDto = CreateKycDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'user-123' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateKycDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: kyc_entity_1.KycStatus, default: kyc_entity_1.KycStatus.PENDING }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(kyc_entity_1.KycStatus),
    __metadata("design:type", String)
], CreateKycDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: kyc_entity_1.VerificationLevel, default: kyc_entity_1.VerificationLevel.BASIC }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(kyc_entity_1.VerificationLevel),
    __metadata("design:type", Number)
], CreateKycDto.prototype, "verificationLevel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateKycDto.prototype, "notes", void 0);
//# sourceMappingURL=create-kyc.dto.js.map