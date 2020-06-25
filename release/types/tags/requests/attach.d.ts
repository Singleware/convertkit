/*!
 * Copyright (C) 2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
/**
 * Attach tag, entity class.
 */
export declare class Attach extends Class.Null {
    /**
     * Subscriber first name.
     */
    firstName?: string;
    /**
     * Subscriber name.
     */
    email: string;
    /**
     * Subscriber fields.
     */
    fields?: RestDB.Map<any>;
    /**
     * Subscriber tags.
     */
    tags?: number[];
}
