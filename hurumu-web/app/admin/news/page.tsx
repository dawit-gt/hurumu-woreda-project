"use client";

import { useMemo, useState } from "react";
import useSWR from "swr";
import { api, arrayFetcher } from "@/lib/api";
import { NewsItem, Department, NewsStatus, NewsTag } from "@/types";
import { RefreshCw, Edit3, Trash2, Plus } from "lucide-react";

const statusOptions: NewsStatus[] = ["DRAFT", "PUBLISHED", "ARCHIVED"];
const tagOptions: NewsTag[] = [
  "ANNOUNCEMENT",
  "EVENT",
  "NOTICE",
  "PROJECT",
  "TENDER",
];

const emptyForm = {
  title: "",
  titleOromoo: "",
  titleAmharic: "",
  slug: "",
  excerpt: "",
  content: "",
  tag: "ANNOUNCEMENT" as NewsTag,
  status: "DRAFT" as NewsStatus,
  isUrgent: false,
  featuredImage: "",
  departmentId: "",
};

type NewsForm = typeof emptyForm;

export default function NewsAdminPage() {
  const {
    data: news = [],
    error,
    isLoading,
    mutate,
  } = useSWR<NewsItem[]>("/news/admin", arrayFetcher);
  const { data: departments = [] } = useSWR<Department[]>(
    "/departments",
    arrayFetcher,
  );
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [form, setForm] = useState<NewsForm>(emptyForm);
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const selectedItem = useMemo(
    () => news.find((item) => item.id === selectedId) ?? null,
    [news, selectedId],
  );

  const handleSelect = (item: NewsItem) => {
    setSelectedId(item.id);
    setForm({
      title: item.title,
      titleOromoo: item.titleOromoo ?? "",
      titleAmharic: item.titleAmharic ?? "",
      slug: item.slug,
      excerpt: item.excerpt,
      content: item.content,
      tag: item.tag,
      status: item.status,
      isUrgent: item.isUrgent,
      featuredImage: item.featuredImage ?? "",
      departmentId: item.departmentId ?? "",
    });
    setMessage("");
  };

  const resetForm = () => {
    setSelectedId(null);
    setForm(emptyForm);
    setMessage("");
  };

  const handleChange = (field: keyof NewsForm, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      if (selectedId) {
        await api.patch(`/news/${selectedId}`, form);
        setMessage("News article updated successfully.");
      } else {
        await api.post("/news", form);
        setMessage("News article created successfully.");
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

  const handleDelete = async (item: NewsItem) => {
    if (!confirm(`Delete news item "${item.title}"?`)) return;
    setLoading(true);
    setMessage("");

    try {
      await api.delete(`/news/${item.id}`);
      setMessage("News article deleted successfully.");
      await mutate();
      if (selectedId === item.id) resetForm();
    } catch (err: any) {
      setMessage(
        err.response?.data?.message ||
          err.message ||
          "Unable to delete news article",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">News</h1>
          <p className="text-sm text-gray-500">
            Create, update, and manage news articles.
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
                All articles
              </h2>
              <p className="text-sm text-gray-500">
                Manage news content and publication status.
              </p>
            </div>
            <div className="text-xs text-gray-500">{news.length} total</div>
          </div>

          {isLoading ? (
            <div className="py-12 text-center text-sm text-gray-500">
              Loading news...
            </div>
          ) : error ? (
            <div className="rounded-2xl bg-red-50 p-4 text-sm text-red-700">
              Failed to load news.
            </div>
          ) : news.length === 0 ? (
            <div className="py-12 text-center text-sm text-gray-500">
              No news articles available.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-separate border-spacing-y-2">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wide text-gray-500">
                    <th className="px-3 py-2">Title</th>
                    <th className="px-3 py-2">Tag</th>
                    <th className="px-3 py-2">Status</th>
                    <th className="px-3 py-2">Department</th>
                    <th className="px-3 py-2">Author</th>
                    <th className="px-3 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {news.map((item) => (
                    <tr key={item.id} className="border-b border-gray-100">
                      <td className="px-3 py-4 text-sm font-medium text-gray-900">
                        {item.title}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        {item.tag}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        {item.status}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        {item.department?.name ?? "—"}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        {item.author.fullName}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        <div className="flex flex-wrap gap-2">
                          <button
                            type="button"
                            onClick={() => handleSelect(item)}
                            className="inline-flex items-center gap-1 rounded-lg bg-green-50 px-3 py-2 text-xs font-medium text-green-700 hover:bg-green-100"
                          >
                            <Edit3 size={14} /> Edit
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDelete(item)}
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
                {selectedId ? "Edit article" : "New article"}
              </h2>
              <p className="text-sm text-gray-500">
                Create or update a news item.
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
              Excerpt
              <textarea
                required
                value={form.excerpt}
                onChange={(event) =>
                  handleChange("excerpt", event.target.value)
                }
                className="mt-1 block w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </label>

            <label className="block text-sm font-medium text-gray-700">
              Content
              <textarea
                required
                value={form.content}
                onChange={(event) =>
                  handleChange("content", event.target.value)
                }
                rows={6}
                className="mt-1 block w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium text-gray-700">
                Tag
                <select
                  value={form.tag}
                  onChange={(event) => handleChange("tag", event.target.value)}
                  className="mt-1 block w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500"
                >
                  {tagOptions.map((tag) => (
                    <option key={tag} value={tag}>
                      {tag}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-sm font-medium text-gray-700">
                Status
                <select
                  value={form.status}
                  onChange={(event) =>
                    handleChange("status", event.target.value)
                  }
                  className="mt-1 block w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500"
                >
                  {statusOptions.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
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
                  <option value="">None</option>
                  {departments.map((dept) => (
                    <option key={dept.id} value={dept.id}>
                      {dept.name}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-sm font-medium text-gray-700">
                Featured Image
                <input
                  value={form.featuredImage}
                  onChange={(event) =>
                    handleChange("featuredImage", event.target.value)
                  }
                  className="mt-1 block w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </label>
            </div>

            <label className="inline-flex items-center gap-2 text-sm font-medium text-gray-700">
              <input
                type="checkbox"
                checked={form.isUrgent}
                onChange={(event) =>
                  handleChange("isUrgent", event.target.checked)
                }
                className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
              />
              Mark as urgent
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
                Save article
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
