import { OmitType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

// The email field will be ignored
export class UpdateUserDto extends OmitType(CreateUserDto, [
  'email',
] as const) {}
