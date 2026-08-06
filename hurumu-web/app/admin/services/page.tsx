"use client";

import { useMemo, useState } from "react";
import useSWR from "swr";
import { api, arrayFetcher } from "@/lib/api";
import { Service, Department, ServiceCategory } from "@/types";
import { RefreshCw, Edit3, Trash2, Plus } from "lucide-react";

const categoryOptions: ServiceCategory[] = [
  "CIVIL_REGISTRATION",
  "LAND_ADMINISTRATION",
  "BUSINESS_LICENSE",
  "AGRICULTURE",
  "HEALTH",
  "EDUCATION",
  "INFRASTRUCTURE",
  "SOCIAL_SERVICES",
  "FINANCE",
  "OTHER",
];

const emptyForm = {
  name: "",
  nameOromoo: "",
  nameAmharic: "",
  slug: "",
  description: "",
  category: "OTHER" as ServiceCategory,
  iconName: "",
  fee: 0,
  processingDays: 0,
  requiredDocs: [""],
  steps: [""],
  isOnline: false,
  departmentId: "",
};

type ServiceForm = typeof emptyForm;

export default function ServicesAdminPage() {
  const {
    data: services = [],
    error,
    isLoading,
    mutate,
  } = useSWR<Service[]>("/services/admin", fetcher);
  const { data: departments = [] } = useSWR<Department[]>(
    "/departments",
    fetcher,
  );
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [form, setForm] = useState<ServiceForm>(emptyForm);
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const selectedService = useMemo(
    () => services.find((item) => item.id === selectedId) ?? null,
    [services, selectedId],
  );

  const handleSelect = (service: Service) => {
    setSelectedId(service.id);
    setForm({
      name: service.name,
      nameOromoo: service.nameOromoo ?? "",
      nameAmharic: service.nameAmharic ?? "",
      slug: service.slug,
      description: service.description,
      category: service.category,
      iconName: service.iconName ?? "",
      fee: service.fee ?? 0,
      processingDays: service.processingDays ?? 0,
      requiredDocs: service.requiredDocs.length ? service.requiredDocs : [""],
      steps: service.steps.length ? service.steps : [""],
      isOnline: service.isOnline,
      departmentId: service.departmentId ?? "",
    });
    setMessage("");
  };

  const resetForm = () => {
    setSelectedId(null);
    setForm(emptyForm);
    setMessage("");
  };

  const handleChange = (
    field: keyof ServiceForm,
    value: string | number | boolean | string[],
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleArrayChange = (
    field: "requiredDocs" | "steps",
    index: number,
    value: string,
  ) => {
    setForm((prev) => {
      const list = [...prev[field]];
      list[index] = value;
      return { ...prev, [field]: list };
    });
  };

  const handleAddListItem = (field: "requiredDocs" | "steps") => {
    setForm((prev) => ({ ...prev, [field]: [...prev[field], ""] }));
  };

  const handleRemoveListItem = (
    field: "requiredDocs" | "steps",
    index: number,
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: prev[field].filter((_, idx) => idx !== index),
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const payload = {
        ...form,
        fee: Number(form.fee),
        processingDays: Number(form.processingDays),
      };
      if (selectedId) {
        await api.patch(`/services/${selectedId}`, payload);
        setMessage("Service updated successfully.");
      } else {
        await api.post("/services", payload);
        setMessage("Service created successfully.");
      }
      await mutate();
      resetForm();
    } catch (err: any) {
      setMessage(
        err.response?.data?.message || err.message || "Unexpected error",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (service: Service) => {
    if (!confirm(`Disable service "${service.name}"?`)) return;
    setLoading(true);
    setMessage("");

    try {
      await api.delete(`/services/${service.id}`);
      setMessage("Service disabled successfully.");
      await mutate();
      if (selectedId === service.id) resetForm();
    } catch (err: any) {
      setMessage(
        err.response?.data?.message ||
          err.message ||
          "Unable to disable service",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Services</h1>
          <p className="text-sm text-gray-500">
            Manage public services and department assignments.
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

      <div className="grid gap-6 xl:grid-cols-[1.3fr,0.7fr]">
        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                All services
              </h2>
              <p className="text-sm text-gray-500">
                Create, edit, and disable services.
              </p>
            </div>
            <div className="text-xs text-gray-500">
              {services.length} services
            </div>
          </div>

          {isLoading ? (
            <div className="py-12 text-center text-sm text-gray-500">
              Loading services...
            </div>
          ) : error ? (
            <div className="rounded-2xl bg-red-50 p-4 text-sm text-red-700">
              Failed to load services.
            </div>
          ) : services.length === 0 ? (
            <div className="py-12 text-center text-sm text-gray-500">
              No services found.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-separate border-spacing-y-2">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wide text-gray-500">
                    <th className="px-3 py-2">Name</th>
                    <th className="px-3 py-2">Category</th>
                    <th className="px-3 py-2">Department</th>
                    <th className="px-3 py-2">Online</th>
                    <th className="px-3 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service) => (
                    <tr key={service.id} className="border-b border-gray-100">
                      <td className="px-3 py-4 text-sm font-medium text-gray-900">
                        {service.name}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        {service.category}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        {service.department?.name ?? "—"}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        {service.isOnline ? "Yes" : "No"}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        <div className="flex flex-wrap gap-2">
                          <button
                            type="button"
                            onClick={() => handleSelect(service)}
                            className="inline-flex items-center gap-1 rounded-lg bg-green-50 px-3 py-2 text-xs font-medium text-green-700 hover:bg-green-100"
                          >
                            <Edit3 size={14} /> Edit
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDelete(service)}
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
                {selectedId ? "Edit service" : "New service"}
              </h2>
              <p className="text-sm text-gray-500">
                Update service details or add a new one.
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
                  required
                  value={form.name}
                  onChange={(event) => handleChange("name", event.target.value)}
                  className="mt-1 block w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </label>
              <label className="block text-sm font-medium text-gray-700">
                Slug
                <input
                  required
                  value={form.slug}
                  onChange={(event) => handleChange("slug", event.target.value)}
                  className="mt-1 block w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </label>
            </div>

            <label className="block text-sm font-medium text-gray-700">
              Description
              <textarea
                required
                value={form.description}
                onChange={(event) =>
                  handleChange("description", event.target.value)
                }
                className="mt-1 block w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium text-gray-700">
                Category
                <select
                  value={form.category}
                  onChange={(event) =>
                    handleChange("category", event.target.value)
                  }
                  className="mt-1 block w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500"
                >
                  {categoryOptions.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-sm font-medium text-gray-700">
                Department
                <select
                  value={form.departmentId}
                  onChange={(event) =>
                    handleChange("departmentId", event.target.value)
                  }
                  className="mt-1 block w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500"
                >
                  <option value="">Unassigned</option>
                  {departments.map((dept) => (
                    <option key={dept.id} value={dept.id}>
                      {dept.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium text-gray-700">
                Fee
                <input
                  type="number"
                  value={form.fee}
                  onChange={(event) =>
                    handleChange("fee", Number(event.target.value))
                  }
                  className="mt-1 block w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </label>
              <label className="block text-sm font-medium text-gray-700">
                Processing days
                <input
                  type="number"
                  value={form.processingDays}
                  onChange={(event) =>
                    handleChange("processingDays", Number(event.target.value))
                  }
                  className="mt-1 block w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </label>
            </div>

            <label className="block text-sm font-medium text-gray-700">
              Icon name
              <input
                value={form.iconName}
                onChange={(event) =>
                  handleChange("iconName", event.target.value)
                }
                className="mt-1 block w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium text-gray-700">
                Online service
                <div className="mt-2 inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={form.isOnline}
                    onChange={(event) =>
                      handleChange("isOnline", event.target.checked)
                    }
                    className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                  />
                  <span className="text-sm text-gray-700">Enabled</span>
                </div>
              </label>
            </div>

            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
              <div className="mb-3 flex items-center justify-between">
                <div className="text-sm font-semibold text-gray-900">
                  Required documents
                </div>
                <button
                  type="button"
                  onClick={() => handleAddListItem("requiredDocs")}
                  className="rounded-lg border border-gray-200 bg-white px-3 py-1 text-xs text-gray-700 hover:bg-gray-100"
                >
                  Add
                </button>
              </div>
              {form.requiredDocs.map((doc, index) => (
                <div key={`doc-${index}`} className="mb-3 flex gap-2">
                  <input
                    value={doc}
                    onChange={(event) =>
                      handleArrayChange(
                        "requiredDocs",
                        index,
                        event.target.value,
                      )
                    }
                    className="flex-1 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveListItem("requiredDocs", index)}
                    className="rounded-lg bg-red-50 px-3 py-2 text-xs font-medium text-red-700 hover:bg-red-100"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
              <div className="mb-3 flex items-center justify-between">
                <div className="text-sm font-semibold text-gray-900">
                  Service steps
                </div>
                <button
                  type="button"
                  onClick={() => handleAddListItem("steps")}
                  className="rounded-lg border border-gray-200 bg-white px-3 py-1 text-xs text-gray-700 hover:bg-gray-100"
                >
                  Add
                </button>
              </div>
              {form.steps.map((step, index) => (
                <div key={`step-${index}`} className="mb-3 flex gap-2">
                  <input
                    value={step}
                    onChange={(event) =>
                      handleArrayChange("steps", index, event.target.value)
                    }
                    className="flex-1 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveListItem("steps", index)}
                    className="rounded-lg bg-red-50 px-3 py-2 text-xs font-medium text-red-700 hover:bg-red-100"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

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
                Save service
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50"
              >
                Clear
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
