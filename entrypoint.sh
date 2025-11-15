#!/bin/sh

npx prisma generate
npx prisma migrate dev
npx prisma db seed
npx prisma studio
npm run build -- --all
npm run start:all