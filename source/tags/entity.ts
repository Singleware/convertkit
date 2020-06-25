/*!
 * Copyright (C) 2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Tags entity class.
 */
@RestDB.Schema.Entity('tags')
@Class.Describe()
export class Entity extends Class.Null {
  /**
   * Tag Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Number()
  @Class.Public()
  public id!: number;

  /**
   * Tag name.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public name!: string;

  /**
   * Creation date.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Alias('created_at')
  @RestDB.Schema.Date()
  @Class.Public()
  public createdAt!: Date;
}
