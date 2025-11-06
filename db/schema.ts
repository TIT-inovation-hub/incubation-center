import { pgTable, serial, text, timestamp, integer } from "drizzle-orm/pg-core";
import { pgEnum } from "drizzle-orm/pg-core";

// Enums for status & priority
export const taskStatus = pgEnum("task_status", [
  "pending",
  "in_progress",
  "completed",
]);

export const taskPriority = pgEnum("task_priority", ["low", "medium", "high"]);

// Users Table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
});

// Tasks Table
export const tasks = pgTable("tasks", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(), // Design Homepage
  description: text("description"),
  status: taskStatus("status").default("pending").notNull(), // In Progress
  priority: taskPriority("priority").default("medium").notNull(), // High
  dueDate: timestamp("due_date"),
  createdAt: timestamp("created_at").defaultNow(),

  assigneeId: integer("assignee_id").references(() => users.id, {
    onDelete: "set null",
  }),
});
