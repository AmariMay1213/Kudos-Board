/*
  Warnings:

  - Made the column `user_Id` on table `Board` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Board" DROP CONSTRAINT "Board_user_Id_fkey";

-- AlterTable
ALTER TABLE "Board" ALTER COLUMN "user_Id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Board" ADD CONSTRAINT "Board_user_Id_fkey" FOREIGN KEY ("user_Id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
