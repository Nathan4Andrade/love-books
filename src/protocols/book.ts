import { books } from "@prisma/client";

export type CreateBook = Omit<books, "id" | "read" | "review" | "grade">;
