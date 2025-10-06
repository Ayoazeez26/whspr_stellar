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
exports.PaginatedMessagesDto = exports.PaginationMetaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const message_entity_1 = require("../entities/message.entity");
class PaginationMetaDto {
    page;
    limit;
    totalItems;
    totalPages;
    hasNextPage;
    hasPreviousPage;
}
exports.PaginationMetaDto = PaginationMetaDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Current page number" }),
    __metadata("design:type", Number)
], PaginationMetaDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Number of items per page" }),
    __metadata("design:type", Number)
], PaginationMetaDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Total number of items" }),
    __metadata("design:type", Number)
], PaginationMetaDto.prototype, "totalItems", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Total number of pages" }),
    __metadata("design:type", Number)
], PaginationMetaDto.prototype, "totalPages", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Whether there is a next page" }),
    __metadata("design:type", Boolean)
], PaginationMetaDto.prototype, "hasNextPage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Whether there is a previous page" }),
    __metadata("design:type", Boolean)
], PaginationMetaDto.prototype, "hasPreviousPage", void 0);
class PaginatedMessagesDto {
    data;
    meta;
}
exports.PaginatedMessagesDto = PaginatedMessagesDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [message_entity_1.Message], description: "Array of messages" }),
    __metadata("design:type", Array)
], PaginatedMessagesDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: PaginationMetaDto, description: "Pagination metadata" }),
    __metadata("design:type", PaginationMetaDto)
], PaginatedMessagesDto.prototype, "meta", void 0);
//# sourceMappingURL=paginated-messages.dto.js.map