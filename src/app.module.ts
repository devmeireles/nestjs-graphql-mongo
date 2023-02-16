import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmExModule } from './database/typeorm-ex.module';
import { MovieModule } from './movie/movie.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieEntity } from './movie/movie.entity';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/nestmongo',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [MovieEntity]
    }),
    TypeOrmExModule.forCustomRepository([MovieEntity]),
    MovieModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
