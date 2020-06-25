/*!
 * Copyright (C) 2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Create tag, entity class.
 */
@RestDB.Schema.Entity('tags')
@Class.Describe()
export class Create extends Class.Null {
  /**
   * Tag name.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public name!: string;
}
