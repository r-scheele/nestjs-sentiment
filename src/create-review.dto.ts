import { IsNotEmpty, IsString } from 'class-validator';

export class CreateReviewDto {

    @IsString()
    @IsNotEmpty()
    readonly review: string;

}
