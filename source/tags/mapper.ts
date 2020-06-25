/*!
 * Copyright (C) 2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Injection from '@singleware/injection';
import * as RestDB from '@singleware/restdb';

import * as Requests from './requests';
import * as Responses from './responses';

import { Client } from '../client';
import { Entity } from './entity';

/**
 * Tags mapper class.
 */
@Injection.Describe({ singleton: true, name: 'tags' })
@Class.Describe()
export class Mapper extends Class.Null {
  /**
   * Last response payload.
   */
  @Class.Private()
  private lastPayload: Responses.Create | Responses.Attach | undefined;

  /**
   * Client instance.
   */
  @Injection.Inject(() => Client)
  @Class.Private()
  private client!: Client;

  /**
   * Mapper instance.
   */
  @Class.Private()
  private mapper = new RestDB.Mapper<Entity>(this.client, Entity);

  /**
   * Get the last request payload.
   */
  @Class.Public()
  public get payload(): Responses.Create | Responses.Attach | undefined {
    return this.lastPayload;
  }

  /**
   * Creates a new tag request.
   * @param request Tag creation request.
   * @returns Returns a promise to get the tag Id.
   * @throws Throws an error when the server response is invalid.
   */
  @Class.Public()
  public async create(request: Requests.Create): Promise<number> {
    this.lastPayload = void 0;
    const id = await this.mapper.insertEx(Requests.Create, request);
    if (id === void 0) {
      throw new Error(`Unexpected server response.`);
    }
    this.lastPayload = RestDB.Outputer.createFull(Responses.Create, this.client.payload!, []);
    return id;
  }

  /**
   * Attach a new subscriber in the tag that corresponds to the specified Id.
   * @param id Tag Id.
   * @param request Tag attachment request.
   * @returns Returns a promise to get the tag attachment Id or undefined when the tag wasn't found.
   */
  @Class.Public()
  public async attach(id: number, request: Requests.Attach): Promise<number> {
    this.lastPayload = void 0;
    await this.mapper.updateByIdEx(Requests.Attach, id, request, { method: RestDB.Method.POST });
    this.lastPayload = RestDB.Outputer.createFull(Responses.Attach, this.client.payload?.subscription, [])!;
    return this.lastPayload?.id;
  }
}
