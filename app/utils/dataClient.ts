import { S3Client } from "@aws-sdk/client-s3";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const s3 = new S3Client({
  region: process.env.WASABI_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  },
  endpoint: "https://s3.ap-southeast-1.wasabisys.com",
});

export { s3, prisma };
