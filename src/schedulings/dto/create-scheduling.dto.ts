import {
  IsDate,
  IsInt,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateSchedulingDto {
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  title: string;

  @IsString()
  @IsOptional()
  @MaxLength(255)
  description?: string;

  @IsDate()
  startDateTime: Date;

  @IsDate()
  endDateTime: Date;

  @IsInt()
  userId: number;
}
