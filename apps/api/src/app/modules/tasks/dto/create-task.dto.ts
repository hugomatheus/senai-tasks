import { Status } from '@nt-al/api-interfaces';
import {
  IsNotEmpty,
  IsString,
  MinLength,
  MaxLength,
  IsEnum,
  IsOptional
} from 'class-validator';
export class CreateTaskDto {
  @IsNotEmpty({ message: 'Descrição: Campo obrigatório.' })
  @IsString({ message: 'Descrição: Precisa ser uma string.' })
  @MinLength(5, { message: 'Descrição: Precisa ter pelo menos 5 caracteres.' })
  @MaxLength(50, { message: 'Descrição: Máximo de 50 caracteres.' })
  description: string;

  @IsEnum(Status ,{ message: 'Valor do status inválido, valores possíveis: Fazer, Fazendo e Feito.' })
  @IsString()
  @IsOptional()
  status: string;
}
