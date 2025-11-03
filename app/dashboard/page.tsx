"use client";

import React, { useState, useMemo, useRef } from "react";

type Person = { id: string; name: string };
type TaskStatus = "Open" | "In Progress" | "Done";
type TaskPriority = "Low" | "Medium" | "High";

interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  assignee: string | null;
  due: string;
}

interface Student {
  id: string;
  name: string;
  class: string;
}

interface AttendanceRecord {
  id: string;
  studentId: string;
  date: string;
  present: boolean;
}

export default function Dashboard() {
  // --- Mock data ---
  const people: Person[] = [
    { id: "p1", name: "Aarav Sharma" },
    { id: "p2", name: "Sofia Patel" },
    { id: "p3", name: "Rohan Gupta" },
  ];

  const initialTasks: Task[] = [
    {
      id: "t1",
      title: "Design Homepage",
      description: "Create hero and about section",
      status: "Open",
      priority: "High",
      assignee: "p1",
      due: "2025-11-10",
    },
    {
      id: "t2",
      title: "Backend Setup",
      description: "Initialize Express and MongoDB",
      status: "In Progress",
      priority: "Medium",
      assignee: "p2",
      due: "2025-11-12",
    },
    {
      id: "t3",
      title: "Testing Suite",
      description: "Add Jest unit tests",
      status: "Done",
      priority: "Low",
      assignee: null,
      due: "2025-11-01",
    },
  ];

  const students: Student[] = [
    { id: "s1", name: "Aarav Sharma", class: "CSE-A" },
    { id: "s2", name: "Sofia Patel", class: "CSE-B" },
    { id: "s3", name: "Rohan Gupta", class: "CSE-A" },
  ];

  const initialAttendance: AttendanceRecord[] = [
    { id: "a1", studentId: "s1", date: "2025-10-30", present: true },
    { id: "a2", studentId: "s2", date: "2025-10-30", present: false },
    { id: "a3", studentId: "s3", date: "2025-10-30", present: true },
  ];

  // --- State ---
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [attendance, setAttendance] =
    useState<AttendanceRecord[]>(initialAttendance);
  const [statusFilter, setStatusFilter] = useState<TaskStatus | "All">("All");
  const [attendanceFilter, setAttendanceFilter] = useState<
    "all" | "present" | "absent"
  >("all");
  const [taskSearch, setTaskSearch] = useState("");
  const [attendanceSearch, setAttendanceSearch] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  // --- Derived data ---
  const filteredTasks = useMemo(() => {
    return tasks.filter((t) => {
      const matchesStatus = statusFilter === "All" || t.status === statusFilter;
      const assigneeName =
        people.find((p) => p.id === t.assignee)?.name.toLowerCase() ?? "";
      const matchesSearch =
        t.title.toLowerCase().includes(taskSearch.toLowerCase()) ||
        assigneeName.includes(taskSearch.toLowerCase());
      return matchesStatus && matchesSearch;
    });
  }, [tasks, statusFilter, taskSearch, people]);

  const filteredAttendance = useMemo(() => {
    return attendance.filter((r) => {
      const student = students.find((s) => s.id === r.studentId);
      if (!student) return false;

      const matchesFilter =
        attendanceFilter === "all"
          ? true
          : attendanceFilter === "present"
          ? r.present
          : !r.present;

      const matchesSearch = student.name
        .toLowerCase()
        .includes(attendanceSearch.toLowerCase());

      const matchesDate =
        (!dateFrom || r.date >= dateFrom) && (!dateTo || r.date <= dateTo);

      return matchesFilter && matchesSearch && matchesDate;
    });
  }, [
    attendance,
    attendanceFilter,
    attendanceSearch,
    students,
    dateFrom,
    dateTo,
  ]);

  // --- Handlers ---
  const changeTaskStatus = (id: string, status: TaskStatus) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, status } : t)));
  };

  const assignTask = (id: string, assignee: string | null) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, assignee } : t)));
  };

  const exportAttendance = () => {
    const header = "Date,Student,Class,Status\n";
    const rows = attendance
      .map((r) => {
        const s = students.find((s) => s.id === r.studentId);
        if (!s) return "";
        return `${r.date},${s.name},${s.class},${
          r.present ? "Present" : "Absent"
        }`;
      })
      .join("\n");

    const blob = new Blob([header + rows], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "attendance.csv";
    link.click();
  };

  const importAttendance = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      const lines = text.split("\n").slice(1);
      const newRecords: AttendanceRecord[] = lines
        .filter(Boolean)
        .map((line, i) => {
          const [date, name, cls, status] = line.split(",");
          const student = students.find(
            (s) => s.name.trim().toLowerCase() === name.trim().toLowerCase()
          );
          return {
            id: `import-${i}`,
            studentId: student?.id ?? "",
            date: date.trim(),
            present: status.trim().toLowerCase() === "present",
          };
        })
        .filter((r) => r.studentId);
      setAttendance((prev) => [...prev, ...newRecords]);
    };
    reader.readAsText(file);
  };

  // --- UI ---
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FFF8F2] to-white dark:from-[#0a0a0a] dark:to-[#121212] px-4 py-10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Manage tasks & check attendance
            </p>
          </div>

          {/* Big Orange Buttons */}
          <div className="flex gap-3 mt-4 sm:mt-0">
            <button
              onClick={exportAttendance}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-xl shadow"
            >
              Export
            </button>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-xl shadow"
            >
              Import
            </button>
            <input
              type="file"
              accept=".csv"
              ref={fileInputRef}
              onChange={importAttendance}
              className="hidden"
            />
          </div>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Tasks */}
          <section className="bg-white dark:bg-gray-900 rounded-2xl shadow p-5">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 mb-4">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                Tasks
              </h2>
              <div className="flex gap-2">
                <input
                  placeholder="Search by title or assignee..."
                  value={taskSearch}
                  onChange={(e) => setTaskSearch(e.target.value)}
                  className="border rounded-md px-2 py-1 text-sm bg-white dark:bg-gray-800"
                />
                <select
                  value={statusFilter}
                  onChange={(e) =>
                    setStatusFilter(e.target.value as TaskStatus | "All")
                  }
                  className="border rounded-md px-2 py-1 text-sm bg-white dark:bg-gray-800"
                >
                  <option value="All">All</option>
                  <option value="Open">Open</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                </select>
              </div>
            </div>

            <div className="space-y-3">
              {filteredTasks.map((t) => (
                <div
                  key={t.id}
                  className="p-4 border border-gray-100 dark:border-gray-700 rounded-lg"
                >
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-gray-100">
                        {t.title}
                      </h3>
                      <p className="text-sm text-gray-500">{t.description}</p>
                      <p className="text-xs text-gray-400 mt-1">Due: {t.due}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <select
                        value={t.assignee ?? ""}
                        onChange={(e) =>
                          assignTask(t.id, e.target.value || null)
                        }
                        className="text-sm border rounded-md px-2 py-1 bg-white dark:bg-gray-800"
                      >
                        <option value="">Unassigned</option>
                        {people.map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.name}
                          </option>
                        ))}
                      </select>
                      <select
                        value={t.status}
                        onChange={(e) =>
                          changeTaskStatus(t.id, e.target.value as TaskStatus)
                        }
                        className="text-xs border rounded-md px-2 py-1 bg-gray-50 dark:bg-gray-800"
                      >
                        <option value="Open">Open</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Done">Done</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                    <span className="mr-2">Priority: {t.priority}</span>
                    <span>Status: {t.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Attendance */}
          <section className="bg-white dark:bg-gray-900 rounded-2xl shadow p-5">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 mb-4">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                Attendance
              </h2>
              <div className="flex flex-wrap gap-2">
                <input
                  placeholder="Search student..."
                  value={attendanceSearch}
                  onChange={(e) => setAttendanceSearch(e.target.value)}
                  className="border rounded-md px-2 py-1 text-sm bg-white dark:bg-gray-800"
                />
                <select
                  value={attendanceFilter}
                  onChange={(e) =>
                    setAttendanceFilter(
                      e.target.value as "all" | "present" | "absent"
                    )
                  }
                  className="border rounded-md px-2 py-1 text-sm bg-white dark:bg-gray-800"
                >
                  <option value="all">All</option>
                  <option value="present">Present</option>
                  <option value="absent">Absent</option>
                </select>
                {/* Date Filters */}
                <input
                  type="date"
                  value={dateFrom}
                  onChange={(e) => setDateFrom(e.target.value)}
                  className="border rounded-md px-2 py-1 text-sm bg-white dark:bg-gray-800"
                />
                <input
                  type="date"
                  value={dateTo}
                  onChange={(e) => setDateTo(e.target.value)}
                  className="border rounded-md px-2 py-1 text-sm bg-white dark:bg-gray-800"
                />
              </div>
            </div>

            <table className="w-full text-sm border-t border-gray-100 dark:border-gray-700">
              <thead className="text-gray-500 text-left">
                <tr>
                  <th className="py-2">Date</th>
                  <th className="py-2">Student</th>
                  <th className="py-2">Class</th>
                  <th className="py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredAttendance.map((r) => {
                  const student = students.find((s) => s.id === r.studentId);
                  if (!student) return null;
                  return (
                    <tr
                      key={r.id}
                      className="border-b border-gray-100 dark:border-gray-800"
                    >
                      <td className="py-2">{r.date}</td>
                      <td>{student.name}</td>
                      <td>{student.class}</td>
                      <td
                        className={
                          r.present ? "text-green-600" : "text-red-600"
                        }
                      >
                        {r.present ? "Present" : "Absent"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </section>
        </div>

        <p className="text-xs text-gray-500 text-center">
          Fully client-side mock dashboard with search, filters, date range, and
          CSV import/export.
        </p>
      </div>
    </main>
  );
}
