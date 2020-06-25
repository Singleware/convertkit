/*!
 * Copyright (C) 2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
/**
 * Tags entity class.
 */
export declare class Entity extends Class.Null {
    /**
     * Tag Id.
     */
    id: number;
    /**
     * Tag name.
     */
    name: string;
    /**
     * Creation date.
     */
    createdAt: Date;
}
