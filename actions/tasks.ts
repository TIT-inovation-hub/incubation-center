"use server";

import { db } from "@/db/drizzle";
import { tasks, users } from "@/db/schema";
import { eq } from "drizzle-orm";
import type { Task } from "@/app/dashboard/tasks/page"; // <-- adjust path if needed

export async function getTasks(): Promise<Task[]> {
  const data = await db
    .select({
      id: tasks.id,
      title: tasks.title,
      description: tasks.description,
      status: tasks.status,
      priority: tasks.priority,
      dueDate: tasks.dueDate,
      createdAt: tasks.createdAt,
      assigneeName: users.name,
    })
    .from(tasks)
    .leftJoin(users, eq(tasks.assigneeId, users.id));

  return data.map((task) => ({
    id: String(task.id),

    title: task.title,
    description: task.description ?? "",

    status:
      task.status === "pending"
        ? "Pending"
        : task.status === "in_progress"
        ? "In Progress"
        : "Completed",

    priority:
      task.priority === "low"
        ? "Low"
        : task.priority === "medium"
        ? "Medium"
        : "High",

    dueDate: task.dueDate ? new Date(task.dueDate).toISOString() : "",
    createdAt: task.createdAt ? new Date(task.createdAt).toISOString() : "",

    assigneeName: task.assigneeName,
  }));
}
