import { ApiProperty } from '@nestjs/swagger';
import { Talle } from '@prisma/client';
import { IsEnum, IsNumber, IsString, MaxLength } from 'class-validator';

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
    required: false,
  })
  @IsEnum(Talle)
  talle: Talle;
}
