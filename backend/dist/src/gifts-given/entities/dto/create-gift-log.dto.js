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
exports.CreateGiftLogDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateGiftLogDto {
    giftId;
    userId;
    recipientId;
    giftType;
    giftValue;
}
exports.CreateGiftLogDto = CreateGiftLogDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Gift identifier' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateGiftLogDto.prototype, "giftId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User who sent the gift' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateGiftLogDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Gift recipient identifier' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateGiftLogDto.prototype, "recipientId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Type of gift sent', maxLength: 100 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateGiftLogDto.prototype, "giftType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Monetary value of the gift' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateGiftLogDto.prototype, "giftValue", void 0);
//# sourceMappingURL=create-gift-log.dto.js.map