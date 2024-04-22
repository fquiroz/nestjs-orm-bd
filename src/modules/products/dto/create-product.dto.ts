import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsString } from 'class-validator';
import { ETalle } from 'src/common/interfaces/product';

export class CreateProductDto {
  @ApiProperty({
    type: String,
    description: 'Find by final, number sale, total',
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
    type: Number,
    description: 'Field Category ID',
    required: true,
  })
  @IsNumber()
  id_categoria: number;

  @ApiProperty({
    type: Number,
    description: 'Field Price',
    required: true,
  })
  @IsNumber()
  precio: number;

  @ApiProperty({
    type: ETalle,
    description: 'Field talle',
    required: true,
  })
  @IsEnum(ETalle)
  talle: ETalle;
}
