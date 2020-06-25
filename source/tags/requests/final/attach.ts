/*!
 * Copyright (C) 2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Base from '../attach';

/**
 * Attachment tag, entity class.
 */
@RestDB.Schema.Entity('tags/{id}/subscribe')
@Class.Describe()
export class Attach extends Base.Attach {
  /**
   * API key.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Alias('api_key')
  @RestDB.Schema.String()
  @Class.Public()
  public apiKey!: string;
}
