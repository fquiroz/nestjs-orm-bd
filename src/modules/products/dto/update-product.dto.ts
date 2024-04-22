import { ApiProperty } from '@nestjs/swagger';
import { Category, Talle } from '@prisma/client';
import { IsEnum, IsNumber, IsString } from 'class-validator';
import { ETalle } from 'src/common/interfaces/product';

export class UpdateProductDto {
  @ApiProperty({
    type: String,
    description: 'Field Name',
    required: true,
  })
  @IsString()
  nombre: string;

  @ApiProperty({
    type: Number,
    description: 'Field Price',
    required: true,
  })
  @IsNumber()
  precio: number;

  @ApiProperty({
    type: String,
    description: 'Field Category ID',
    required: true,
  })
  id_categoria: string;

  @ApiProperty({
    enum: ETalle,
    description: 'Field talle',
    required: true,
  })
  @IsEnum(Talle)
  talle: Talle;
}
