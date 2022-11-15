import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { FileController } from './file.controller';
import { MulterModule } from '@nestjs/platform-express';
import { SequelizeModule } from '@nestjs/sequelize';
import { File } from './models/file.model';

@Module({
  imports: [
    MulterModule.register({
      dest: './upload',
    }),
    SequelizeModule.forFeature([File]),
  ],
  controllers: [FileController],
  providers: [FileService],
})
export class FileModule {}
