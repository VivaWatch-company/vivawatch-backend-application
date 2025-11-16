#!/bin/sh

npm install
npx prisma generate
npx prisma migrate dev
npx prisma db seed
npm run build -- --all
npm run start:all