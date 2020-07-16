"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
/*!
 * Copyright (C) 2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const Injection = require("@singleware/injection");
const RestDB = require("@singleware/restdb");
const TagRequests = require("./tags/requests");
/**
 * Client driver class.
 */
let Client = class Client extends RestDB.Driver {
    /**
     * Default constructor.
     */
    constructor() {
        super();
        this.connect('https://api.convertkit.com/v3');
    }
    /**
     * Get the insert result from the given response entity.
     * @param model Entity model.
     * @param response Response entity.
     * @returns Returns the insert result.
     * @throws Throws an error when the server response is invalid.
     */
    getInsertResponse(model, response) {
        this.lastPayload = response.payload;
        if (response.status.code !== 201) {
            throw new Error(`Unexpected insert(${response.input.method}) response status: ${response.status.code}`);
        }
        else if (!(this.lastPayload instanceof Object)) {
            throw new Error(`Response body must have an object.`);
        }
        return this.lastPayload.id;
    }
    /**
     * Get the updated entity status from the given response entity.
     * @param model Entity model.
     * @param response Response entity.
     * @returns Returns the updated entity status.
     * @throws Throws an error when the server response is invalid.
     */
    getUpdateByIdResponse(model, response) {
        this.lastPayload = response.payload;
        if (response.status.code !== 200) {
            throw new Error(`Unexpected update(${response.input.method}) response status: ${response.status.code}`);
        }
        else if (!(this.lastPayload instanceof Object)) {
            throw new Error(`Response payload must be an object.`);
        }
        return true;
    }
    /**
     * Get the request query string based on the specified entity model, filters and fields.
     * @param model Entity model.
     * @param query Query filter.
     * @param fields Fields to select.
     * @returns Returns the instance itself.
     * @throws Throws an error when used with filters or selected fields. (Features doesn't supported)
     */
    getRequestQuery(model, query, select) {
        if (query || (select && select.length > 0)) {
            throw new Error(`Query filter and Selected fields aren't supported.`);
        }
        return '/';
    }
    /**
     * Get the correct request model based on the given input model.
     * @param model Input model.
     * @returns Returns the request model.
     */
    getRequestModel(model) {
        switch (model) {
            case TagRequests.Create:
                return TagRequests.Final.Create;
            case TagRequests.Attach:
                return TagRequests.Final.Attach;
            default:
                return model;
        }
    }
    /**
     * Attach the current API key in the specified entity list.
     * @param entities Entity list.
     * @returns Returns the given entity list.
     */
    attachKey(entities) {
        for (const entity of entities) {
            entity.apiKey = this.apiKey;
        }
        return entities;
    }
    /**
     * Get the last request payload.
     */
    get payload() {
        return this.lastPayload;
    }
    /**
     * Set a new API key for all subsequent requests.
     * @param key New API key.
     * @returns Returns the instance itself.
     */
    setAuthKey(key) {
        this.apiKey = key;
        return this;
    }
    /**
     * Insert the specified entity using a POST request.
     * @param model Model type.
     * @param entities Entity list.
     * @param options Insert options.
     * @returns Returns a promise to get the insertion results or undefined when an error occurs.
     * @throws Throws an error when the server response is invalid.
     */
    insert(model, entities, options) {
        return super.insert(this.getRequestModel(model), this.attachKey(entities), options);
    }
    /**
     * Update the entity that corresponds to the specified Id using a PATCH request.
     * @param model Model type.
     * @param id Entity Id.
     * @param entity Entity data.
     * @param options Update options.
     * @returns Returns a promise to get the true when the entity was updated either undefined when an error occurs or false otherwise.
     * @throws Throws an error when the server response is invalid.
     */
    updateById(model, id, entity, options) {
        return super.updateById(this.getRequestModel(model), id, this.attachKey([entity])[0], options);
    }
};
__decorate([
    Class.Private()
], Client.prototype, "apiKey", void 0);
__decorate([
    Class.Private()
], Client.prototype, "lastPayload", void 0);
__decorate([
    Class.Protected()
], Client.prototype, "getInsertResponse", null);
__decorate([
    Class.Protected()
], Client.prototype, "getUpdateByIdResponse", null);
__decorate([
    Class.Protected()
], Client.prototype, "getRequestQuery", null);
__decorate([
    Class.Private()
], Client.prototype, "getRequestModel", null);
__decorate([
    Class.Private()
], Client.prototype, "attachKey", null);
__decorate([
    Class.Public()
], Client.prototype, "payload", null);
__decorate([
    Class.Public()
], Client.prototype, "setAuthKey", null);
__decorate([
    Class.Public()
], Client.prototype, "insert", null);
__decorate([
    Class.Public()
], Client.prototype, "updateById", null);
Client = __decorate([
    Injection.Describe({ singleton: true, name: 'client' }),
    Class.Describe()
], Client);
exports.Client = Client;
//# sourceMappingURL=client.js.map