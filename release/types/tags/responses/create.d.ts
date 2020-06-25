/*!
 * Copyright (C) 2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
/**
 * Tag creation, response entity class.
 */
export declare class Create extends Class.Null {
    /**
     * Tag Id.
     */
    id: number;
    /**
     * Account Id.
     */
    accountId?: number;
    /**
     * Creation date.
     */
    createdAt: Date;
    /**
     * Updated date.
     */
    updatedAt?: Date;
    /**
     * Deletion date.
     */
    deletedAt?: Date;
    /**
     * Tag name.
     */
    name: string;
    /**
     * Tag state.
     */
    state?: string;
}
