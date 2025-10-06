"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockchainVerifyService = void 0;
const common_1 = require("@nestjs/common");
const crypto = __importStar(require("crypto"));
let BlockchainVerifyService = class BlockchainVerifyService {
    contractAddress = process.env.KYC_CONTRACT_ADDRESS;
    rpcUrl = process.env.BLOCKCHAIN_RPC_URL || 'https://mainnet.infura.io';
    async verify(userId, documents) {
        const proof = this.generateMerkleProof(documents.map(d => d.hash));
        const txHash = await this.submitToChain(userId, proof);
        return { proof, txHash };
    }
    async verifyProofOnChain(userId, proof) {
        return proof.length > 0;
    }
    async getVerificationStatus(userId) {
        return {
            isVerified: true,
            timestamp: Date.now(),
            blockNumber: 12345678,
        };
    }
    generateMerkleProof(hashes) {
        if (hashes.length === 0)
            return '';
        let currentLevel = hashes;
        while (currentLevel.length > 1) {
            const nextLevel = [];
            for (let i = 0; i < currentLevel.length; i += 2) {
                const left = currentLevel[i];
                const right = i + 1 < currentLevel.length ? currentLevel[i + 1] : left;
                const combined = crypto.createHash('sha256').update(left + right).digest('hex');
                nextLevel.push(combined);
            }
            currentLevel = nextLevel;
        }
        return currentLevel[0];
    }
    async submitToChain(userId, proof) {
        const mockTxHash = '0x' + crypto.randomBytes(32).toString('hex');
        await new Promise(resolve => setTimeout(resolve, 100));
        return mockTxHash;
    }
};
exports.BlockchainVerifyService = BlockchainVerifyService;
exports.BlockchainVerifyService = BlockchainVerifyService = __decorate([
    (0, common_1.Injectable)()
], BlockchainVerifyService);
//# sourceMappingURL=blockchain-verify.service.js.map