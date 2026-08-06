"use client";

import { useMemo, useState } from "react";
import useSWR from "swr";
import { api } from "@/lib/api";
import { Document, Department, DocumentType } from "@/types";
import { RefreshCw, Edit3, Trash2, Plus } from "lucide-react";

const fetcher = <T,>(url: string) =>
  api.get<{ data: T }>(url).then((res) => res.data.data);

const documentTypes: DocumentType[] = [
  "BUDGET_REPORT",
  "PROCUREMENT_PLAN",
  "PERFORMANCE_REPORT",
  "POLICY",
  "GUIDELINE",
  "TENDER_DOCUMENT",
  "ANNUAL_PLAN",
  "OTHER",
];

const emptyForm = {
  title: "",
  description: "",
  type: "OTHER" as DocumentType,
  fileUrl: "",
  fileSize: 0,
  mimeType: "",
  fiscalYear: "",
  quarter: 0,
  isPublic: false,
  departmentId: "",
};

type DocumentForm = typeof emptyForm;

export default function DocumentsAdminPage() {
  const {
    data: documents = [],
    error,
    isLoading,
    mutate,
  } = useSWR<Document[]>("/documents/admin", fetcher);
  const { data: departments = [] } = useSWR<Department[]>(
    "/departments",
    fetcher,
  );
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [form, setForm] = useState<DocumentForm>(emptyForm);
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const selectedDocument = useMemo(
    () => documents.find((item) => item.id === selectedId) ?? null,
    [documents, selectedId],
  );

  const handleSelect = (doc: Document) => {
    setSelectedId(doc.id);
    setForm({
      title: doc.title,
      description: doc.description ?? "",
      type: doc.type,
      fileUrl: doc.fileUrl,
      fileSize: doc.fileSize ?? 0,
      mimeType: doc.mimeType ?? "",
      fiscalYear: doc.fiscalYear ?? "",
      quarter: doc.quarter ?? 0,
      isPublic: doc.isPublic,
      departmentId: doc.department?.id ?? "",
    });
    setMessage("");
  };

  const resetForm = () => {
    setSelectedId(null);
    setForm(emptyForm);
    setMessage("");
  };

  const handleChange = (
    field: keyof DocumentForm,
    value: string | number | boolean,
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const payload = {
        ...form,
        fileSize: Number(form.fileSize),
        quarter: Number(form.quarter),
      };
      if (selectedId) {
        await api.patch(`/documents/${selectedId}`, payload);
        setMessage("Document updated successfully.");
      } else {
        await api.post("/documents", payload);
        setMessage("Document created successfully.");
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

  const handleDelete = async (doc: Document) => {
    if (!confirm(`Delete document "${doc.title}"?`)) return;
    setLoading(true);
    setMessage("");

    try {
      await api.delete(`/documents/${doc.id}`);
      setMessage("Document deleted successfully.");
      await mutate();
      if (selectedId === doc.id) resetForm();
    } catch (err: any) {
      setMessage(
        err.response?.data?.message ||
          err.message ||
          "Unable to delete document",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Documents</h1>
          <p className="text-sm text-gray-500">
            Upload and manage document records.
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
                All documents
              </h2>
              <p className="text-sm text-gray-500">
                Manage document metadata and visibility.
              </p>
            </div>
            <div className="text-xs text-gray-500">
              {documents.length} items
            </div>
          </div>

          {isLoading ? (
            <div className="py-12 text-center text-sm text-gray-500">
              Loading documents...
            </div>
          ) : error ? (
            <div className="rounded-2xl bg-red-50 p-4 text-sm text-red-700">
              Failed to load documents.
            </div>
          ) : documents.length === 0 ? (
            <div className="py-12 text-center text-sm text-gray-500">
              No documents found.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-separate border-spacing-y-2">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wide text-gray-500">
                    <th className="px-3 py-2">Title</th>
                    <th className="px-3 py-2">Type</th>
                    <th className="px-3 py-2">Department</th>
                    <th className="px-3 py-2">Public</th>
                    <th className="px-3 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {documents.map((doc) => (
                    <tr key={doc.id} className="border-b border-gray-100">
                      <td className="px-3 py-4 text-sm font-medium text-gray-900">
                        {doc.title}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        {doc.type}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        {doc.department?.name ?? "—"}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        {doc.isPublic ? "Yes" : "No"}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        <div className="flex flex-wrap gap-2">
                          <button
                            type="button"
                            onClick={() => handleSelect(doc)}
                            className="inline-flex items-center gap-1 rounded-lg bg-green-50 px-3 py-2 text-xs font-medium text-green-700 hover:bg-green-100"
                          >
                            <Edit3 size={14} /> Edit
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDelete(doc)}
                            className="inline-flex items-center gap-1 rounded-lg bg-red-50 px-3 py-2 text-xs font-medium text-red-700 hover:bg-red-100"
                          >
                            <Trash2 size={14} /> Delete
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
                {selectedId ? "Edit document" : "New document"}
              </h2>
              <p className="text-sm text-gray-500">
                Create or update a document record.
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
                Title
                <input
                  required
                  value={form.title}
                  onChange={(event) =>
                    handleChange("title", event.target.value)
                  }
                  className="mt-1 block w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </label>
              <label className="block text-sm font-medium text-gray-700">
                Type
                <select
                  required
                  value={form.type}
                  onChange={(event) => handleChange("type", event.target.value)}
                  className="mt-1 block w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500"
                >
                  {documentTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="block text-sm font-medium text-gray-700">
              File URL
              <input
                required
                type="url"
                value={form.fileUrl}
                onChange={(event) =>
                  handleChange("fileUrl", event.target.value)
                }
                className="mt-1 block w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </label>

            <label className="block text-sm font-medium text-gray-700">
              Description
              <textarea
                value={form.description}
                onChange={(event) =>
                  handleChange("description", event.target.value)
                }
                className="mt-1 block w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium text-gray-700">
                Fiscal year
                <input
                  value={form.fiscalYear}
                  onChange={(event) =>
                    handleChange("fiscalYear", event.target.value)
                  }
                  className="mt-1 block w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </label>
              <label className="block text-sm font-medium text-gray-700">
                Quarter
                <input
                  type="number"
                  min={0}
                  max={4}
                  value={form.quarter}
                  onChange={(event) =>
                    handleChange("quarter", Number(event.target.value))
                  }
                  className="mt-1 block w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium text-gray-700">
                File size (KB)
                <input
                  type="number"
                  value={form.fileSize}
                  onChange={(event) =>
                    handleChange("fileSize", Number(event.target.value))
                  }
                  className="mt-1 block w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </label>
              <label className="block text-sm font-medium text-gray-700">
                MIME type
                <input
                  value={form.mimeType}
                  onChange={(event) =>
                    handleChange("mimeType", event.target.value)
                  }
                  className="mt-1 block w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
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
              <label className="inline-flex items-center gap-2 text-sm font-medium text-gray-700">
                <input
                  type="checkbox"
                  checked={form.isPublic}
                  onChange={(event) =>
                    handleChange("isPublic", event.target.checked)
                  }
                  className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                />
                Publicly visible
              </label>
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
                Save document
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
