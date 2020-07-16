/*!
 * Copyright (C) 2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Injection from '@singleware/injection';
import * as RestDB from '@singleware/restdb';

import * as TagRequests from './tags/requests';

/**
 * Client driver class.
 */
@Injection.Describe({ singleton: true, name: 'client' })
@Class.Describe()
export class Client extends RestDB.Driver {
  /**
   * Current API key.
   */
  @Class.Private()
  private apiKey?: string;

  /**
   * Last payload data.
   */
  @Class.Private()
  private lastPayload?: RestDB.Entity;

  /**
   * Get the insert result from the given response entity.
   * @param model Entity model.
   * @param response Response entity.
   * @returns Returns the insert result.
   * @throws Throws an error when the server response is invalid.
   */
  @Class.Protected()
  protected getInsertResponse<R>(model: RestDB.Model, response: RestDB.Responses.Output): R {
    this.lastPayload = response.payload;
    if (response.status.code !== 201) {
      throw new Error(`Unexpected insert(${response.input.method}) response status: ${response.status.code}`);
    } else if (!(this.lastPayload instanceof Object)) {
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
  @Class.Protected()
  protected getUpdateByIdResponse(model: RestDB.Model, response: RestDB.Responses.Output): boolean | undefined {
    this.lastPayload = response.payload!;
    if (response.status.code !== 200) {
      throw new Error(`Unexpected update(${response.input.method}) response status: ${response.status.code}`);
    } else if (!(this.lastPayload instanceof Object)) {
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
  @Class.Protected()
  protected getRequestQuery(model: RestDB.Model, query?: RestDB.Query, select?: string[]): string {
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
  @Class.Private()
  private getRequestModel(model: RestDB.Model) {
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
  @Class.Private()
  private attachKey<T>(entities: T[]): T[] {
    for (const entity of entities) {
      (entity as any).apiKey = this.apiKey;
    }
    return entities;
  }

  /**
   * Default constructor.
   */
  constructor() {
    super();
    this.connect('https://api.convertkit.com/v3');
  }

  /**
   * Get the last request payload.
   */
  @Class.Public()
  public get payload(): RestDB.Entity | undefined {
    return this.lastPayload;
  }

  /**
   * Set a new API key for all subsequent requests.
   * @param key New API key.
   * @returns Returns the instance itself.
   */
  @Class.Public()
  public setAuthKey(key: string): Client {
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
  @Class.Public()
  public insert<E, R>(model: RestDB.Model<E>, entities: E[], options: RestDB.Options): Promise<R[] | undefined> {
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
  @Class.Public()
  public updateById<E, I>(model: RestDB.Model<E>, id: I, entity: RestDB.Entity, options: RestDB.Options): Promise<boolean | undefined> {
    return super.updateById(this.getRequestModel(model), id, this.attachKey([entity])[0], options);
  }
}
