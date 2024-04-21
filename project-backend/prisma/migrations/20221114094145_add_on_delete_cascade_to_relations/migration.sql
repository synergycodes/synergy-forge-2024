-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Version" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "integrationId" INTEGER NOT NULL,
    "isFinal" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "Version_integrationId_fkey" FOREIGN KEY ("integrationId") REFERENCES "Integration" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Version" ("id", "integrationId", "isFinal", "name") SELECT "id", "integrationId", "isFinal", "name" FROM "Version";
DROP TABLE "Version";
ALTER TABLE "new_Version" RENAME TO "Version";
CREATE TABLE "new_Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "integrationId" INTEGER NOT NULL,
    CONSTRAINT "Category_integrationId_fkey" FOREIGN KEY ("integrationId") REFERENCES "Integration" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Category" ("id", "integrationId", "name") SELECT "id", "integrationId", "name" FROM "Category";
DROP TABLE "Category";
ALTER TABLE "new_Category" RENAME TO "Category";
CREATE TABLE "new_CategoryItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "cost" INTEGER NOT NULL,
    "perParticipant" BOOLEAN NOT NULL,
    "versionId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    CONSTRAINT "CategoryItem_versionId_fkey" FOREIGN KEY ("versionId") REFERENCES "Version" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "CategoryItem_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_CategoryItem" ("categoryId", "cost", "id", "name", "perParticipant", "versionId") SELECT "categoryId", "cost", "id", "name", "perParticipant", "versionId" FROM "CategoryItem";
DROP TABLE "CategoryItem";
ALTER TABLE "new_CategoryItem" RENAME TO "CategoryItem";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
