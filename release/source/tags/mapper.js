"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mapper = void 0;
/*!
 * Copyright (C) 2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const Injection = require("@singleware/injection");
const RestDB = require("@singleware/restdb");
const Requests = require("./requests");
const Responses = require("./responses");
const client_1 = require("../client");
const entity_1 = require("./entity");
/**
 * Tags mapper class.
 */
let Mapper = class Mapper extends Class.Null {
    constructor() {
        super(...arguments);
        /**
         * Mapper instance.
         */
        this.mapper = new RestDB.Mapper(this.client, entity_1.Entity);
    }
    /**
     * Get the last request payload.
     */
    get payload() {
        return this.lastPayload;
    }
    /**
     * Creates a new tag request.
     * @param request Tag creation request.
     * @returns Returns a promise to get the tag Id.
     * @throws Throws an error when the server response is invalid.
     */
    async create(request) {
        this.lastPayload = void 0;
        const id = await this.mapper.insertEx(Requests.Create, request);
        if (id === void 0) {
            throw new Error(`Unexpected server response.`);
        }
        this.lastPayload = RestDB.Outputer.createFull(Responses.Create, this.client.payload, []);
        return id;
    }
    /**
     * Attach a new subscriber in the tag that corresponds to the specified Id.
     * @param id Tag Id.
     * @param request Tag attachment request.
     * @returns Returns a promise to get the tag attachment Id or undefined when the tag wasn't found.
     */
    async attach(id, request) {
        var _a, _b;
        this.lastPayload = void 0;
        await this.mapper.updateByIdEx(Requests.Attach, id, request, { method: RestDB.Method.POST });
        this.lastPayload = RestDB.Outputer.createFull(Responses.Attach, (_a = this.client.payload) === null || _a === void 0 ? void 0 : _a.subscription, []);
        return (_b = this.lastPayload) === null || _b === void 0 ? void 0 : _b.id;
    }
};
__decorate([
    Class.Private()
], Mapper.prototype, "lastPayload", void 0);
__decorate([
    Injection.Inject(() => client_1.Client),
    Class.Private()
], Mapper.prototype, "client", void 0);
__decorate([
    Class.Private()
], Mapper.prototype, "mapper", void 0);
__decorate([
    Class.Public()
], Mapper.prototype, "payload", null);
__decorate([
    Class.Public()
], Mapper.prototype, "create", null);
__decorate([
    Class.Public()
], Mapper.prototype, "attach", null);
Mapper = __decorate([
    Injection.Describe({ singleton: true, name: 'tags' }),
    Class.Describe()
], Mapper);
exports.Mapper = Mapper;
//# sourceMappingURL=mapper.js.map