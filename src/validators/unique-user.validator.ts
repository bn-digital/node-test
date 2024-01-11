import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@ValidatorConstraint({ name: 'uniqueUser', async: true })
@Injectable()
export class UniqueUserValidator implements ValidatorConstraintInterface {
  constructor(private readonly usersService: UsersService) {}

  validate = async (value: any): Promise<boolean> => {
    const entity = await this.usersService.findByEmail(value);
    return !entity;
  };

  defaultMessage() {
    return `The email must be unique`;
  }
}
