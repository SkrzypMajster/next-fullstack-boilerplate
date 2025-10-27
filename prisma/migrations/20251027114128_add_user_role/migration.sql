-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('USER', 'ADMINISTRATOR');

-- AlterTable
ALTER TABLE "user_auth" ADD COLUMN     "role" "UserRole" NOT NULL DEFAULT 'USER';
