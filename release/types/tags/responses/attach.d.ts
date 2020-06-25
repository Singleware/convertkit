/*!
 * Copyright (C) 2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
/**
 * Tag attachment, response entity class.
 */
export declare class Attach extends Class.Null {
    /**
     * Subscription Id.
     */
    id: number;
    /**
     * Subscribable Id.
     */
    subscribableId: number;
    /**
     * Subscribable type.
     */
    subscribableType: string;
    /**
     * Creation date.
     */
    createdAt: Date;
    /**
     * Subscription source.
     */
    source?: string | null;
    /**
     * Subscription referer.
     */
    referer?: string | null;
    /**
     * Subscription state.
     */
    state?: string;
}
