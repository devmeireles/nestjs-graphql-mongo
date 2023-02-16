import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType('Movie')
export class MovieType {
    @Field(type => ID)
    id: string;

    @Field()
    name: string;

    @Field()
    startDate: string;

    @Field()
    endDate: string;
}