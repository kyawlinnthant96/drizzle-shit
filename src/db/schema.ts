import {integer, pgTable, varchar} from "drizzle-orm/pg-core";

export const testTable = pgTable("test", {
    id: integer().primaryKey().generatedByDefaultAsIdentity(),
    name: varchar({length: 255}).notNull(),
})

export type insertTest = typeof testTable.$inferInsert
export type updateTest = Omit<insertTest, 'id'>


export const testTwoTable = pgTable("test_two", {
    id: integer().primaryKey().generatedByDefaultAsIdentity(),
    name: varchar({length: 255}).notNull(),
})