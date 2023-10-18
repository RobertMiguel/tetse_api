import { MigrationInterface, QueryRunner } from "typeorm";

export class default1697068826054 implements MigrationInterface {
    name = 'default1697068826054'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "products" ("id" SERIAL NOT NULL, "tombo" integer NOT NULL, "nome" text NOT NULL, "marca" text NOT NULL, "empresa" text NOT NULL, "setor" text NOT NULL, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "products"`);
    }

}
