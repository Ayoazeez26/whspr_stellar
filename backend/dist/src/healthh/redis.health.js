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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisHealthIndicator = void 0;
const common_1 = require("@nestjs/common");
const terminus_1 = require("@nestjs/terminus");
const ioredis_1 = __importDefault(require("ioredis"));
let RedisHealthIndicator = class RedisHealthIndicator extends terminus_1.HealthIndicator {
    client;
    constructor() {
        super();
        this.client = new ioredis_1.default({ host: 'localhost', port: 6379 });
    }
    async isHealthy(key) {
        try {
            const pong = await this.client.ping();
            const isHealthy = pong === 'PONG';
            return this.getStatus(key, isHealthy);
        }
        catch (err) {
            return this.getStatus(key, false, { message: err.message });
        }
    }
};
exports.RedisHealthIndicator = RedisHealthIndicator;
exports.RedisHealthIndicator = RedisHealthIndicator = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], RedisHealthIndicator);
//# sourceMappingURL=redis.health.js.map