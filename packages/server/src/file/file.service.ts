import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateFileDto } from './dto/create-file.dto';
import { File } from './models/file.model';

@Injectable()
export class FileService {
  constructor(
    @InjectModel(File)
    private fileModel: typeof File,
  ) {}

  create(createFileDto: CreateFileDto) {
    console.log('hewlkjkljkjkj');
    return this.fileModel.create({
      name: createFileDto.name,
      size: createFileDto.size,
      uploadedAt: createFileDto.uploadedAt,
    });
  }

  findAll() {
    return this.fileModel.findAll();
  }

  async remove(id: number) {
    const file = await this.fileModel.findOne({
      where: {
        id,
      },
    });
    await file.destroy();
    return file;
  }
}
