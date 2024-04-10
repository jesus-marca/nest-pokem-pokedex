import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { isMongoId, isObject } from 'class-validator';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class ParseMongoIdPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    // console.log({ value, metadata });
    if (!isValidObjectId(value)) {
      throw new BadRequestException(`${value} is not valid mongoID`);
    }
    return value.toUpperCase();
  }
}
