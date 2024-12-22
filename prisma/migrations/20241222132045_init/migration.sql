-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "userType" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Company" (
    "companyDomainName" TEXT NOT NULL PRIMARY KEY,
    "numberOfEmployees" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
