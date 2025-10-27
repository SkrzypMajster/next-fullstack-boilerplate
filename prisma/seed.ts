import { PrismaClient } from '@prisma/client';

import { generatePasswordHash } from '../src/utils/crypto';

const prisma = new PrismaClient();

const createDefaultAdminAccount = async () => {
  if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD || !process.env.ADMIN_USERNAME) {
    throw new Error('Default admin account creation error - env variables are missing');
  }

  const email = process.env.ADMIN_EMAIL;
  const password = await generatePasswordHash(process.env.ADMIN_PASSWORD);
  const name = process.env.ADMIN_USERNAME;

  await prisma.userAuth.create({
    data: { email, password, role: 'ADMINISTRATOR', user: { create: { name } } },
  });
};

async function main() {
  createDefaultAdminAccount();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    // eslint-disable-next-line no-console
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
