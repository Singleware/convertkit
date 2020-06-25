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
 * Attach tag, entity class.
 */
let Attach = class Attach extends Class.Null {
};
__decorate([
    RestDB.Schema.Alias('first_name'),
    RestDB.Schema.String(),
    Class.Public()
], Attach.prototype, "firstName", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    Class.Public()
], Attach.prototype, "email", void 0);
__decorate([
    RestDB.Schema.Object(Object),
    Class.Public()
], Attach.prototype, "fields", void 0);
__decorate([
    RestDB.Schema.Array(Number),
    Class.Public()
], Attach.prototype, "tags", void 0);
Attach = __decorate([
    RestDB.Schema.Entity('tags/{id}/subscribe'),
    Class.Describe()
], Attach);
exports.Attach = Attach;
//# sourceMappingURL=attach.js.map