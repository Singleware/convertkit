/*!
 * Copyright (C) 2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Base from '../create';

/**
 * Create tag, entity class.
 */
@RestDB.Schema.Entity('tags')
@Class.Describe()
export class Create extends Base.Create {
  /**
   * API key.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Alias('api_key')
  @RestDB.Schema.String()
  @Class.Public()
  public apiKey!: string;
}
