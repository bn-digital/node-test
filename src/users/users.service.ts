import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma.service';
import { User } from './entities/user.entity';
@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }
  async create(data: CreateUserDto): Promise<User> {
    return this.prisma.user.create({ data });
  }
  async findById(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id: Number(id) },
    });
  }
  async update(id: string, data: UpdateUserDto): Promise<User | null> {
    return this.prisma.user.update({
      where: { id: Number(id) },
      data,
    });
  }
  async remove(id: string): Promise<User | null> {
    return this.prisma.user.delete({
      where: { id: Number(id) },
    });
  }
}
