import { IsString, IsEnum, IsOptional, IsBoolean } from 'class-validator'
import { TypeReference, TypePartners, TypeTMZ } from '../models/referense.model';

export class CreateReferenceDto {
  @IsString()
  name: string;

  @IsEnum(TypeReference)
  typeReference: TypeReference;

  @IsOptional()
  @IsEnum(TypePartners)
  typePartners?: TypePartners;

  @IsOptional()
  @IsEnum(TypeTMZ)
  typeTMZ?: TypeTMZ;

  @IsOptional()
  @IsString()
  unit?: string;

  @IsOptional()
  @IsBoolean()
  deleted: boolean = false;

  @IsOptional()
  @IsString()
  comment?: string;
}
