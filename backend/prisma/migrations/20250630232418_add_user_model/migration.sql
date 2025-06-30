-- AlterTable
ALTER TABLE "Board" ADD COLUMN     "user_Id" INTEGER;

-- AlterTable
ALTER TABLE "Card" ADD COLUMN     "user_Id" INTEGER;

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_user_Id_fkey" FOREIGN KEY ("user_Id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Board" ADD CONSTRAINT "Board_user_Id_fkey" FOREIGN KEY ("user_Id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
