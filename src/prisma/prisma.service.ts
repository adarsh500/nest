import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor() {
        super(
            {
                datasources: {
                    db: {
                        url: 'postgresql://adarsh:2w4r6y8i0p@localhost:5432/mydb?schema=public'
                    }
                }
            }
        )
    }
}
