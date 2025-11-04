"use client";

import React, { useState, useMemo } from "react";
import TaskFilters from "@/components/dashboard/TaskFilters";
import TaskList from "@/components/dashboard/TaskList";

type TaskStatus = "Pending" | "In Progress" | "Completed";
type TaskPriority = "Low" | "Medium" | "High";
type ViewMode = "grid" | "list";

interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  assignee: string | null;
  due: string;
  createdAt: string;
}

interface User {
  id: string;
  name: string;
  role: string;
  avatar?: string;
}

export default function TasksPage() {
  // Mock data
  const users: User[] = useMemo(() => [
    { id: "u1", name: "Aarav Sharma", role: "Developer" },
    { id: "u2", name: "Sofia Patel", role: "Designer" },
    { id: "u3", name: "Rohan Gupta", role: "Manager" },
    { id: "u4", name: "Priya Singh", role: "Developer" },
    { id: "u5", name: "Karan Verma", role: "Designer" },
  ], []);

  const initialTasks: Task[] = [
    {
      id: "t1",
      title: "Design Homepage",
      description: "Create hero section and landing page layout",
      status: "In Progress",
      priority: "High",
      assignee: "u2",
      due: "2025-11-10",
      createdAt: "2025-11-01",
    },
    {
      id: "t2",
      title: "Backend Setup",
      description: "Initialize Express server and MongoDB connection",
      status: "In Progress",
      priority: "Medium",
      assignee: "u1",
      due: "2025-11-12",
      createdAt: "2025-11-02",
    },
    {
      id: "t3",
      title: "Testing Suite",
      description: "Add Jest unit tests for core functionality",
      status: "Completed",
      priority: "Low",
      assignee: "u4",
      due: "2025-11-08",
      createdAt: "2025-10-28",
    },
    {
      id: "t4",
      title: "API Documentation",
      description: "Document all REST API endpoints",
      status: "Pending",
      priority: "Medium",
      assignee: null,
      due: "2025-11-15",
      createdAt: "2025-11-03",
    },
    {
      id: "t5",
      title: "User Authentication",
      description: "Implement JWT-based authentication system",
      status: "In Progress",
      priority: "High",
      assignee: "u1",
      due: "2025-11-11",
      createdAt: "2025-10-30",
    },
  ];

  const [tasks] = useState<Task[]>(initialTasks);
  const [taskView, setTaskView] = useState<ViewMode>("grid");
  const [taskSearch, setTaskSearch] = useState("");
  const [taskFilter, setTaskFilter] = useState<TaskStatus | "All">("All");
  const [assigneeFilter, setAssigneeFilter] = useState<string>("All");

  // Filter tasks
  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesSearch =
        task.title.toLowerCase().includes(taskSearch.toLowerCase()) ||
        task.description.toLowerCase().includes(taskSearch.toLowerCase());
      const matchesStatus = taskFilter === "All" || task.status === taskFilter;
      const matchesAssignee = assigneeFilter === "All" || task.assignee === assigneeFilter;

      return matchesSearch && matchesStatus && matchesAssignee;
    });
  }, [tasks, taskSearch, taskFilter, assigneeFilter]);

  return (
    <div className="space-y-6">
      {/* Tasks Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Task Management
          </h2>
          <p className="text-gray-600 mt-1">
            Track and manage project tasks
          </p>
        </div>

        <TaskFilters
          taskSearch={taskSearch}
          onTaskSearchChange={setTaskSearch}
          taskFilter={taskFilter}
          onTaskFilterChange={setTaskFilter}
          assigneeFilter={assigneeFilter}
          onAssigneeFilterChange={setAssigneeFilter}
          taskView={taskView}
          onTaskViewChange={setTaskView}
          users={users}
        />
      </div>

      {/* Tasks Display */}
      <TaskList tasks={filteredTasks} users={users} viewMode={taskView} />
    </div>
  );
}