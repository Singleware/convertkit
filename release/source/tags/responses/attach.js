"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attach = void 0;
/*!
 * Copyright (C) 2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
/**
 * Tag attachment, response entity class.
 */
let Attach = class Attach extends Class.Null {
};
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Number(),
    Class.Public()
], Attach.prototype, "id", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Alias('subscribable_id'),
    RestDB.Schema.Number(),
    Class.Public()
], Attach.prototype, "subscribableId", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Alias('subscribable_type'),
    RestDB.Schema.String(),
    Class.Public()
], Attach.prototype, "subscribableType", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Alias('created_at'),
    RestDB.Schema.Date(),
    Class.Public()
], Attach.prototype, "createdAt", void 0);
__decorate([
    RestDB.Schema.String(),
    RestDB.Schema.Null(),
    Class.Public()
], Attach.prototype, "source", void 0);
__decorate([
    RestDB.Schema.String(),
    RestDB.Schema.Null(),
    Class.Public()
], Attach.prototype, "referer", void 0);
__decorate([
    RestDB.Schema.String(),
    Class.Public()
], Attach.prototype, "state", void 0);
Attach = __decorate([
    RestDB.Schema.Entity('tags/{id}/subscribe'),
    Class.Describe()
], Attach);
exports.Attach = Attach;
//# sourceMappingURL=attach.js.map