import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as uuid from 'uuid';
import { MovieEntity } from './movie.entity';
import { CreateMovieInput } from './movie.input';
import { MovieRepository } from './movie.repository';

@Injectable()
export class MovieService {

    @InjectRepository(MovieRepository)
    private movieRepository: MovieRepository;

    constructor(movieRepository: MovieRepository) {
        this.movieRepository = movieRepository;
    }

    async getMovies(): Promise<MovieEntity[]> {
        return await this.movieRepository.find();
    }

    async createMovie(createMovieInput: CreateMovieInput): Promise<MovieEntity> {
        const { name, startDate, endDate } = createMovieInput;

        const movie = this.movieRepository.create({
            id: uuid.v4(),
            name,
            startDate,
            endDate
        });

        return this.movieRepository.save(movie);
    }

    async getMovie(id: string): Promise<MovieEntity> {
        const movie = this.movieRepository.findOne({
            where: {
                id
            }
        });

        return movie;
    }
}
