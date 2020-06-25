/*!
 * Copyright (C) 2020 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Testing from '@singleware/testing';
import * as Injection from '@singleware/injection';

import * as ConvertKit from '../../source';

import { Helper } from '../helper';

/**
 * Tags test case.
 */
@Class.Describe()
export class Tags extends Testing.Case {
  /**
   * ConvertKit mapper.
   */
  @Injection.Inject(ConvertKit.Tags.Mapper)
  @Class.Private()
  private tags!: ConvertKit.Tags.Mapper;

  /**
   * Default constructor.
   */
  constructor() {
    super();
    Helper.setAuthorization();
  }

  /**
   * Create tag successful.
   */
  @Testing.Method()
  @Class.Public()
  public async createTagSuccessful(): Promise<void> {
    const id = await this.tags.create({
      name: 'New tag'
    });
    this.areNotSame(id, void 0);
    this.areNotEquals(this.tags.payload, void 0);
  }

  /**
   * Attach tag successful.
   */
  @Testing.Method()
  @Class.Public()
  public async attachTagSuccessful(): Promise<void> {
    const tagId = await Helper.getNewTagEntity();
    const id = await this.tags.attach(tagId, {
      firstName: 'Singleware',
      email: 'test@singleware.com.br',
      fields: {
        language: 'pt-BR'
      }
    });
    this.areNotSame(id, void 0);
    this.areNotEquals(this.tags.payload, void 0);
  }
}
