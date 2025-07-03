/*
  Warnings:

  - You are about to drop the column `user_Id` on the `Board` table. All the data in the column will be lost.
  - You are about to drop the column `user_Id` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Board" DROP CONSTRAINT "Board_user_Id_fkey";

-- DropForeignKey
ALTER TABLE "Card" DROP CONSTRAINT "Card_user_Id_fkey";

-- AlterTable
ALTER TABLE "Board" DROP COLUMN "user_Id";

-- AlterTable
ALTER TABLE "Card" DROP COLUMN "user_Id";

-- DropTable
DROP TABLE "User";
