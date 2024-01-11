import { IsEmail, IsNotEmpty, Validate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UniqueUserValidator } from '../../validators/unique-user.validator';
export class CreateUserDto {
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsEmail()
  @ApiProperty()
  @Validate(UniqueUserValidator)
  email: string;
}
