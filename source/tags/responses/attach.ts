/*!
 * Copyright (C) 2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Tag attachment, response entity class.
 */
@RestDB.Schema.Entity('tags/{id}/subscribe')
@Class.Describe()
export class Attach extends Class.Null {
  /**
   * Subscription Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Number()
  @Class.Public()
  public id!: number;

  /**
   * Subscribable Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Alias('subscribable_id')
  @RestDB.Schema.Number()
  @Class.Public()
  public subscribableId!: number;

  /**
   * Subscribable type.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Alias('subscribable_type')
  @RestDB.Schema.String()
  @Class.Public()
  public subscribableType!: string;

  /**
   * Creation date.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Alias('created_at')
  @RestDB.Schema.Date()
  @Class.Public()
  public createdAt!: Date;

  /**
   * Subscription source.
   */
  @RestDB.Schema.String()
  @RestDB.Schema.Null()
  @Class.Public()
  public source?: string | null;

  /**
   * Subscription referer.
   */
  @RestDB.Schema.String()
  @RestDB.Schema.Null()
  @Class.Public()
  public referer?: string | null;

  /**
   * Subscription state.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public state?: string;
}
