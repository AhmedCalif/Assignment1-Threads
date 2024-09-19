import { integer, pgTable, serial, text, varchar, timestamp, pgSchema, boolean,  } from "drizzle-orm/pg-core";
import { sql } from 'drizzle-orm';




export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  username: varchar('username', { length: 50 }).notNull(),
  email: varchar('email', { length: 100 }).notNull(),
  password: text('password').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});



export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),                 
  title: varchar('title', { length: 255 }).notNull(), 
  content: text('content').notNull(),         
  isPublished: boolean('is_published').default(false), 
  createdAt: timestamp('created_at').notNull().defaultNow(), 
  updatedAt: timestamp('updated_at', { mode: 'string' })      
    .notNull()
    .default(sql`now()`)
});