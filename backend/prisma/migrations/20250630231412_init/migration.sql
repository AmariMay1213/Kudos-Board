-- CreateTable
CREATE TABLE "Card" (
    "card_Id" SERIAL NOT NULL,
    "board_Id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "gif_Url" TEXT NOT NULL,
    "author" TEXT,
    "upVotes" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("card_Id")
);

-- CreateTable
CREATE TABLE "Board" (
    "board_Id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Board_pkey" PRIMARY KEY ("board_Id")
);

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_board_Id_fkey" FOREIGN KEY ("board_Id") REFERENCES "Board"("board_Id") ON DELETE CASCADE ON UPDATE CASCADE;
