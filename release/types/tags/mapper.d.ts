/*!
 * Copyright (C) 2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Requests from './requests';
import * as Responses from './responses';
/**
 * Tags mapper class.
 */
export declare class Mapper extends Class.Null {
    /**
     * Last response payload.
     */
    private lastPayload;
    /**
     * Client instance.
     */
    private client;
    /**
     * Mapper instance.
     */
    private mapper;
    /**
     * Get the last request payload.
     */
    get payload(): Responses.Create | Responses.Attach | undefined;
    /**
     * Creates a new tag request.
     * @param request Tag creation request.
     * @returns Returns a promise to get the tag Id.
     * @throws Throws an error when the server response is invalid.
     */
    create(request: Requests.Create): Promise<number>;
    /**
     * Attach a new subscriber in the tag that corresponds to the specified Id.
     * @param id Tag Id.
     * @param request Tag attachment request.
     * @returns Returns a promise to get the tag attachment Id or undefined when the tag wasn't found.
     */
    attach(id: number, request: Requests.Attach): Promise<number>;
}
