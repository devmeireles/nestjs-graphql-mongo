import { Injectable } from "@nestjs/common";
import { Repository, DataSource } from "typeorm";
import { MovieEntity } from "./movie.entity";

@Injectable()
export class MovieRepository extends Repository<MovieEntity> {
    constructor(private dataSource: DataSource) {
        super(MovieEntity, dataSource.createEntityManager());
    }
}