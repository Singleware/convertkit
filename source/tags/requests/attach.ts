/*!
 * Copyright (C) 2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Attach tag, entity class.
 */
@RestDB.Schema.Entity('tags/{id}/subscribe')
@Class.Describe()
export class Attach extends Class.Null {
  /**
   * Subscriber first name.
   */
  @RestDB.Schema.Alias('first_name')
  @RestDB.Schema.String()
  @Class.Public()
  public firstName?: string;

  /**
   * Subscriber name.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public email!: string;

  /**
   * Subscriber fields.
   */
  @RestDB.Schema.Object(Object)
  @Class.Public()
  public fields?: RestDB.Map<any>;

  /**
   * Subscriber tags.
   */
  @RestDB.Schema.Array(Number)
  @Class.Public()
  public tags?: number[];
}
