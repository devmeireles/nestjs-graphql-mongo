import { Column, Entity, ObjectIdColumn, PrimaryColumn } from "typeorm";

@Entity('movie')
export class MovieEntity {
    @ObjectIdColumn()
    _id: string;

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    startDate: string;

    @Column()
    endDate: string;
}