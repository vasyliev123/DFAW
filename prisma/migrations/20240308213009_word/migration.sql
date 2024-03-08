/*
  Warnings:

  - You are about to drop the column `meaning` on the `Word` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Word` table. All the data in the column will be lost.
  - Added the required column `word` to the `Word` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Word" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "word" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Word" ("createdAt", "id") SELECT "createdAt", "id" FROM "Word";
DROP TABLE "Word";
ALTER TABLE "new_Word" RENAME TO "Word";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
