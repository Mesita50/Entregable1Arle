import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { User } from './user.model';
import { getModelToken } from '@nestjs/sequelize';

@Module({
  providers: [
    UsersService,
    {
      provide: getModelToken(User), // Aquí obtienes el token del modelo User
      useValue: mockModel, // Aquí proporcionas el modelo simulado
    },
    // Puedes agregar más proveedores si es necesario
  ],
})
export class UsersModule {}