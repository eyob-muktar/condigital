import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  UseInterceptors,
  MaxFileSizeValidator,
  ParseFilePipe,
  UploadedFile,
} from '@nestjs/common';
import { FileService } from './file.service';
import { CreateFileDto } from './dto/create-file.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { unlink } from 'fs/promises';

const MB = 1000 * 1000;

@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  create(
    @UploadedFile(
      new ParseFilePipe({
        validators: [new MaxFileSizeValidator({ maxSize: 10 * MB })],
      }),
    )
    file: Express.Multer.File,
  ) {
    const fileToSave: CreateFileDto = {
      name: file.originalname,
      size: file.size,
      path: file.path,
      uploadedAt: new Date(),
    };

    return this.fileService.create(fileToSave);
  }

  @Get()
  findAll() {
    return this.fileService.findAll();
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const deletedFile = await this.fileService.remove(+id);

    // Remove the actual file from server
    await unlink(deletedFile.path);

    return 'Successfully Deleted';
  }
}
