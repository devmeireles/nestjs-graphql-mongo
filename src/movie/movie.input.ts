import { Field, InputType } from "@nestjs/graphql";
import { MinLength } from "class-validator";
import { IsDateString } from "class-validator";

@InputType()
export class CreateMovieInput {
    @MinLength(1)
    @Field()
    name: string;

    @IsDateString()
    @Field()
    startDate: string;

    @IsDateString()
    @Field()
    endDate: string;
}