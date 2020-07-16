import * as RestDB from '@singleware/restdb';
/**
 * Client driver class.
 */
export declare class Client extends RestDB.Driver {
    /**
     * Current API key.
     */
    private apiKey?;
    /**
     * Last payload data.
     */
    private lastPayload?;
    /**
     * Get the insert result from the given response entity.
     * @param model Entity model.
     * @param response Response entity.
     * @returns Returns the insert result.
     * @throws Throws an error when the server response is invalid.
     */
    protected getInsertResponse<R>(model: RestDB.Model, response: RestDB.Responses.Output): R;
    /**
     * Get the updated entity status from the given response entity.
     * @param model Entity model.
     * @param response Response entity.
     * @returns Returns the updated entity status.
     * @throws Throws an error when the server response is invalid.
     */
    protected getUpdateByIdResponse(model: RestDB.Model, response: RestDB.Responses.Output): boolean | undefined;
    /**
     * Get the request query string based on the specified entity model, filters and fields.
     * @param model Entity model.
     * @param query Query filter.
     * @param fields Fields to select.
     * @returns Returns the instance itself.
     * @throws Throws an error when used with filters or selected fields. (Features doesn't supported)
     */
    protected getRequestQuery(model: RestDB.Model, query?: RestDB.Query, select?: string[]): string;
    /**
     * Get the correct request model based on the given input model.
     * @param model Input model.
     * @returns Returns the request model.
     */
    private getRequestModel;
    /**
     * Attach the current API key in the specified entity list.
     * @param entities Entity list.
     * @returns Returns the given entity list.
     */
    private attachKey;
    /**
     * Default constructor.
     */
    constructor();
    /**
     * Get the last request payload.
     */
    get payload(): RestDB.Entity | undefined;
    /**
     * Set a new API key for all subsequent requests.
     * @param key New API key.
     * @returns Returns the instance itself.
     */
    setAuthKey(key: string): Client;
    /**
     * Insert the specified entity using a POST request.
     * @param model Model type.
     * @param entities Entity list.
     * @param options Insert options.
     * @returns Returns a promise to get the insertion results or undefined when an error occurs.
     * @throws Throws an error when the server response is invalid.
     */
    insert<E, R>(model: RestDB.Model<E>, entities: E[], options: RestDB.Options): Promise<R[] | undefined>;
    /**
     * Update the entity that corresponds to the specified Id using a PATCH request.
     * @param model Model type.
     * @param id Entity Id.
     * @param entity Entity data.
     * @param options Update options.
     * @returns Returns a promise to get the true when the entity was updated either undefined when an error occurs or false otherwise.
     * @throws Throws an error when the server response is invalid.
     */
    updateById<E, I>(model: RestDB.Model<E>, id: I, entity: RestDB.Entity, options: RestDB.Options): Promise<boolean | undefined>;
}
