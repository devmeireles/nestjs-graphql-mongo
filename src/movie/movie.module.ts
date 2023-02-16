import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieEntity } from './movie.entity';
import { MovieRepository } from './movie.repository';
import { MovieResolver } from './movie.resolver';
import { MovieService } from './movie.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([MovieEntity])
    ],
    providers: [
        MovieResolver,
        MovieService,
        MovieRepository
    ]
})
export class MovieModule { }
