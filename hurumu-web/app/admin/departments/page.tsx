"use client";

import { useMemo, useState } from "react";
import useSWR from "swr";
import { api, arrayFetcher } from "@/lib/api";
import { Department } from "@/types";
import { Plus, Edit3, Trash2, RefreshCw } from "lucide-react";

const emptyForm = {
  name: "",
  nameOromoo: "",
  slug: "",
  description: "",
  iconName: "",
  headName: "",
  phone: "",
  email: "",
  sortOrder: 0,
};

type DepartmentForm = typeof emptyForm;

export default function DepartmentsAdminPage() {
  const { data, error, isLoading, mutate } = useSWR<Department[]>(
    "/departments",
    arrayFetcher,
  );
  const [form, setForm] = useState<DepartmentForm>(emptyForm);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const departments = data ?? [];
  const isEditing = Boolean(selectedId);

  const selectedDepartment = useMemo(
    () => departments.find((dept) => dept.id === selectedId) ?? null,
    [departments, selectedId],
  );

  const handleChange = (
    field: keyof DepartmentForm,
    value: string | number,
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setSelectedId(null);
    setForm(emptyForm);
    setMessage("");
  };

  const handleEdit = (department: Department) => {
    setSelectedId(department.id);
    setForm({
      name: department.name,
      nameOromoo: department.nameOromoo ?? "",
      slug: department.slug,
      description: department.description ?? "",
      iconName: department.iconName ?? "",
      headName: department.headName ?? "",
      phone: department.phone ?? "",
      email: department.email ?? "",
      sortOrder: department.sortOrder,
    });
    setMessage("");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      if (isEditing && selectedId) {
        await api.patch(`/departments/${selectedId}`, form);
        setMessage("Department updated successfully.");
      } else {
        await api.post("/departments", form);
        setMessage("Department created successfully.");
      }
      await mutate();
      resetForm();
    } catch (err: any) {
      setMessage(
        err.response?.data?.message ||
          err.message ||
          "An unexpected error occurred.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (department: Department) => {
    if (!confirm(`Disable department "${department.name}"?`)) return;
    setLoading(true);
    setMessage("");

    try {
      await api.delete(`/departments/${department.id}`);
      setMessage("Department disabled successfully.");
      await mutate();
      if (selectedId === department.id) resetForm();
    } catch (err: any) {
      setMessage(
        err.response?.data?.message ||
          err.message ||
          "Failed to disable department.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Departments</h1>
          <p className="text-sm text-gray-500">
            Manage the departments used by your Hurumu portal.
          </p>
        </div>
        <button
          type="button"
          onClick={() => mutate()}
          className="inline-flex items-center gap-2 rounded-lg border border-green-200 bg-white px-4 py-2 text-sm font-medium text-green-700 shadow-sm hover:bg-green-50"
        >
          <RefreshCw size={16} /> Refresh
        </button>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.2fr,0.8fr]">
        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Active departments
              </h2>
              <p className="text-sm text-gray-500">
                Only active departments are shown here.
              </p>
            </div>
            <div className="text-xs text-gray-500">
              {departments.length} items
            </div>
          </div>

          {isLoading ? (
            <div className="py-12 text-center text-sm text-gray-500">
              Loading departments...
            </div>
          ) : error ? (
            <div className="rounded-2xl bg-red-50 p-4 text-sm text-red-700">
              Failed to load departments.
            </div>
          ) : departments.length === 0 ? (
            <div className="py-12 text-center text-sm text-gray-500">
              No departments found.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-separate border-spacing-y-2">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wide text-gray-500">
                    <th className="px-3 py-2">Name</th>
                    <th className="px-3 py-2">Slug</th>
                    <th className="px-3 py-2">Head</th>
                    <th className="px-3 py-2">Email</th>
                    <th className="px-3 py-2">Phone</th>
                    <th className="px-3 py-2">Sort</th>
                    <th className="px-3 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {departments.map((department) => (
                    <tr
                      key={department.id}
                      className="border-b border-gray-100"
                    >
                      <td className="px-3 py-4 text-sm font-medium text-gray-900">
                        {department.name}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        {department.slug}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        {department.headName || "—"}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        {department.email || "—"}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        {department.phone || "—"}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        {department.sortOrder}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => handleEdit(department)}
                            className="inline-flex items-center gap-1 rounded-lg bg-green-50 px-3 py-2 text-xs font-medium text-green-700 hover:bg-green-100"
                          >
                            <Edit3 size={14} /> Edit
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDelete(department)}
                            className="inline-flex items-center gap-1 rounded-lg bg-red-50 px-3 py-2 text-xs font-medium text-red-700 hover:bg-red-100"
                          >
                            <Trash2 size={14} /> Disable
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                {isEditing ? "Edit department" : "New department"}
              </h2>
              <p className="text-sm text-gray-500">
                Create or update department details here.
              </p>
            </div>
            <button
              type="button"
              onClick={resetForm}
              className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-xs text-gray-600 hover:bg-gray-100"
            >
              <Plus size={14} /> Reset
            </button>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium text-gray-700">
                Name
                <input
                  value={form.name}
                  onChange={(event) => handleChange("name", event.target.value)}
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </label>
              <label className="block text-sm font-medium text-gray-700">
                Slug
                <input
                  value={form.slug}
                  onChange={(event) => handleChange("slug", event.target.value)}
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium text-gray-700">
                Head name
                <input
                  value={form.headName}
                  onChange={(event) =>
                    handleChange("headName", event.target.value)
                  }
                  className="mt-1 block w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </label>
              <label className="block text-sm font-medium text-gray-700">
                Email
                <input
                  type="email"
                  value={form.email}
                  onChange={(event) =>
                    handleChange("email", event.target.value)
                  }
                  className="mt-1 block w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium text-gray-700">
                Phone
                <input
                  value={form.phone}
                  onChange={(event) =>
                    handleChange("phone", event.target.value)
                  }
                  className="mt-1 block w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </label>
              <label className="block text-sm font-medium text-gray-700">
                Sort order
                <input
                  type="number"
                  value={form.sortOrder}
                  onChange={(event) =>
                    handleChange("sortOrder", Number(event.target.value))
                  }
                  className="mt-1 block w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </label>
            </div>

            <label className="block text-sm font-medium text-gray-700">
              Description
              <textarea
                value={form.description}
                onChange={(event) =>
                  handleChange("description", event.target.value)
                }
                rows={4}
                className="mt-1 block w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </label>

            <label className="block text-sm font-medium text-gray-700">
              Name (Oromoo)
              <input
                value={form.nameOromoo}
                onChange={(event) =>
                  handleChange("nameOromoo", event.target.value)
                }
                className="mt-1 block w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </label>

            {message ? (
              <div className="rounded-2xl bg-green-50 px-4 py-3 text-sm text-green-700">
                {message}
              </div>
            ) : null}

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center rounded-lg bg-green-800 px-5 py-3 text-sm font-semibold text-white hover:bg-green-700 disabled:opacity-60"
              >
                {isEditing ? "Save changes" : "Create department"}
              </button>
              {isEditing ? (
                <button
                  type="button"
                  onClick={resetForm}
                  className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                >
                  Cancel edit
                </button>
              ) : null}
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}