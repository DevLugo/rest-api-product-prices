import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SignInRsDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  token: string;
}
