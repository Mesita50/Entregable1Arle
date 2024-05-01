import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize';
import { Album } from './album.model';

@Injectable()
export class AlbumsService {
  constructor(
    @InjectConnection('albumsConnection')
    private sequelize: Sequelize,
  ) {}

  async findAll(): Promise<Album[]> {
    return Album.findAll({ raw: true, nest: true });
  }

  async findById(id: number): Promise<Album> {
    return Album.findByPk(id);
  }

  // Aquí puedes agregar más métodos para interactuar con la base de datos
}