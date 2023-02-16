import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateMovieInput } from "./movie.input";
import { MovieService } from "./movie.service";
import { MovieType } from "./movie.type";

@Resolver((_of: any) => MovieType)
export class MovieResolver {
    private movieService: MovieService;

    constructor(movieService: MovieService) {
        this.movieService = movieService
    }

    @Query(returns => MovieType)
    movie(
        @Args('id') id: string
    ) {
        return this.movieService.getMovie(id);
    }

    @Query(returns => [MovieType])
    async movies(

    ) {
        return await this.movieService.getMovies();
    }

    @Mutation(returns => MovieType)
    createMovie(
        @Args('createMovieInput') createMovieInput: CreateMovieInput
    ) {
        return this.movieService.createMovie(createMovieInput)
    }
}