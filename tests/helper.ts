/*!
 * Copyright (C) 2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Injection from '@singleware/injection';

import * as ConvertKit from '../source';

/**
 * Helper class.
 */
@Class.Describe()
export class Helper extends Class.Null {
  /**
   * API client.
   */
  @Injection.Inject(ConvertKit.Client)
  @Class.Private()
  private static client: ConvertKit.Client;

  /**
   * Tags mapper.
   */
  @Injection.Inject(ConvertKit.Tags.Mapper)
  @Class.Private()
  private static tags: ConvertKit.Tags.Mapper;

  /**
   * Set the ConvertKit client authorization.
   */
  @Class.Public()
  public static setAuthorization(): void {
    this.client.setAuthKey('YOUR_TOKEN');
  }

  /**
   * Get a new tag entity.
   * @returns Returns a promise to get the new tag Id.
   */
  @Class.Public()
  public static async getNewTagEntity(): Promise<number> {
    return await this.tags.create({
      name: 'Test tag'
    });
  }
}
