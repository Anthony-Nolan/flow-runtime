/* @flow */

import Type from './Type';

import type Validation, {ErrorTuple, IdentifierPath} from '../Validation';


export default class ExistentialType extends Type {
  typeName: string = 'ExistentialType';

  *errors (validation: Validation<any>, path: IdentifierPath, input: any): Generator<ErrorTuple, void, void> {

  }

  accepts (input: any): boolean {
    return true;
  }

  compareWith (input: Type<any>): -1 | 0 | 1 {
    return 1;
  }

  toString (): string {
    return '*';
  }

  toJSON () {
    return {
      typeName: this.typeName
    };
  }
}