import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
    
@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  	id: number;
  @Column({ type: 'integer' })
  	tombo: number;
  @Column({ type: 'text' })
  	nome: string;
  @Column({ type: 'text' })
  	marca: string;
  @Column({ type: 'text' })
  	empresa: string;
  @Column({ type: 'text' })
  	setor: string;
}
