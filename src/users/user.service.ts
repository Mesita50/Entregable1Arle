import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { User } from './user.model'; // Importa el modelo User si no lo has hecho

@Injectable()
export class UsersService {
  constructor(private sequelize: Sequelize, private userModel: typeof User) {}

  async createMany() {
    try {
      await this.sequelize.transaction(async t => {
        const transactionHost = { transaction: t };

        await this.userModel.create(
          { firstName: 'Abraham', lastName: 'Lincoln' },
          transactionHost,
        );
        await this.userModel.create(
          { firstName: 'John', lastName: 'Boothe' },
          transactionHost,
        );
      });
    } catch (err) {
      // La transacción ha sido revertida
      // err es cualquier error que haya rechazado la cadena de promesas devuelta a la devolución de llamada de la transacción
    }
  }
}