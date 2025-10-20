-- CreateTable
CREATE TABLE "user_auth" (
    "id" TEXT NOT NULL,
    "user_data_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "user_auth_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_auth_user_data_id_key" ON "user_auth"("user_data_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_auth_email_key" ON "user_auth"("email");

-- AddForeignKey
ALTER TABLE "user_auth" ADD CONSTRAINT "user_auth_user_data_id_fkey" FOREIGN KEY ("user_data_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
