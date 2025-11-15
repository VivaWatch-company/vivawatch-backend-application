import { PrismaClient } from 'generated/prisma/client';
import { PlanSeeder } from './seed-factories/plan.seeder';

const prismaClient = new PrismaClient();

async function main() {
  await PlanSeeder(prismaClient);
}

main()
  .then(() => {
    console.log('Seeder successfully run 🍃');
  })
  .catch((err) => {
    console.log(err);
  });
