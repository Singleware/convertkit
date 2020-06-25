/*!
 * Copyright (C) 2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Tag creation, response entity class.
 */
@RestDB.Schema.Entity('tags')
@Class.Describe()
export class Create extends Class.Null {
  /**
   * Tag Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Number()
  @Class.Public()
  public id!: number;

  /**
   * Account Id.
   */
  @RestDB.Schema.Alias('account_id')
  @RestDB.Schema.Number()
  @Class.Public()
  public accountId?: number;

  /**
   * Creation date.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Alias('created_at')
  @RestDB.Schema.Date()
  @Class.Public()
  public createdAt!: Date;

  /**
   * Updated date.
   */
  @RestDB.Schema.Alias('updated_at')
  @RestDB.Schema.Date()
  @Class.Public()
  public updatedAt?: Date;

  /**
   * Deletion date.
   */
  @RestDB.Schema.Alias('delete_at')
  @RestDB.Schema.Date()
  @Class.Public()
  public deletedAt?: Date;

  /**
   * Tag name.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public name!: string;

  /**
   * Tag state.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public state?: string;
}
