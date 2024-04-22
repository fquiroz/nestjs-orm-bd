import { ApiProperty } from '@nestjs/swagger';
import {  Talle } from '@prisma/client';
import { IsEnum, IsNumber, IsString, MaxLength } from 'class-validator';
import { ETalle } from 'src/common/interfaces/product';

export class CreateProductDto {
  @ApiProperty({
    type: String,
    description: 'Field code',
    required: true,
  })
  @IsString()
  codigo: string;

  @ApiProperty({
    type: String,
    description: 'Field Name',
    required: true,
  })
  @MaxLength(100)
  @IsString()
  nombre: string;

  @ApiProperty({
    description: 'Field Category ID',
    required: true,
  })
  id_categoria: string;

  @ApiProperty({
    type: Number,
    description: 'Field Price',
    required: true,
  })
  @IsNumber()
  precio: number;

  @ApiProperty({
    enum: ETalle,
    description: 'Field talle',
    required: false,
  })
  @IsEnum(Talle)
  talle: Talle;
}
