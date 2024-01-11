import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from '../prisma.service';
import { UniqueUserValidator } from '../validators/unique-user.validator';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService, UniqueUserValidator],
})
export class UsersModule {}
