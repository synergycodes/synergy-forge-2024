-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Version" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "integrationId" INTEGER NOT NULL,
    "isFinal" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "Version_integrationId_fkey" FOREIGN KEY ("integrationId") REFERENCES "Integration" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Version" ("id", "integrationId", "name") SELECT "id", "integrationId", "name" FROM "Version";
DROP TABLE "Version";
ALTER TABLE "new_Version" RENAME TO "Version";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
