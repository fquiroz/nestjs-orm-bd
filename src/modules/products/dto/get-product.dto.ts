import { ApiProperty } from '@nestjs/swagger';
import { Talle } from '@prisma/client';
import { IsEnum, IsNumber, IsString } from 'class-validator';

export class GetProductDto {
  @ApiProperty({
    type: String,
    description: 'Field ID',
    required: true,
  })
  @IsString()
  id: string;

  @ApiProperty({
    type: String,
    description: 'Field Code',
    required: false,
  })
  @IsString()
  codigo: string;

  @ApiProperty({
    type: String,
    description: 'Field Name',
    required: true,
  })
  @IsString()
  nombre: string;

  @ApiProperty({
    type: String,
    description: 'Field Category ID',
    required: true,
  })
  @IsString()
  id_categoria: string;

  @ApiProperty({
    type: Number,
    description: 'Field Price',
    required: true,
  })
  @IsNumber()
  precio: number;

  @ApiProperty({
    enum: Talle,
    description: 'Field talle',
    required: true,
  })
  @IsEnum(Talle)
  talle: Talle;
}
