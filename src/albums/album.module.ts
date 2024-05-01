import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AlbumsService } from './album.service';
import { Album } from './album.model';
import { Sequelize } from 'sequelize'; // Importar Sequelize

@Module({
  imports: [
    SequelizeModule.forFeature([Album], 'albumsConnection'),
    // Aquí importarías otros módulos necesarios
  ],
  providers: [
    {
      provide: AlbumsService,
      useFactory: (albumsSequelize: Sequelize) => {
        return new AlbumsService(albumsSequelize);
      },
      inject: [Sequelize], // Inyectar Sequelize aquí
    },
    // Aquí puedes agregar otros proveedores si es necesario
  ],
  exports: [AlbumsService], // Si quieres que AlbumsService esté disponible para otros módulos
})
export class AlbumsModule {}
