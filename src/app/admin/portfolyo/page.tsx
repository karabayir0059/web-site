"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  category: string;
  client: string | null;
  isActive: boolean;
}

export default function PortfolyoPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = () => {
    fetch("/api/admin/projects")
      .then((r) => r.json())
      .then((data) => {
        setProjects(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const toggleActive = async (id: number, current: boolean) => {
    await fetch(`/api/admin/projects/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isActive: !current }),
    });
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, isActive: !current } : p))
    );
  };

  const deleteProject = async (id: number) => {
    if (!confirm("Bu projeyi silmek istediğinize emin misiniz?")) return;
    await fetch(`/api/admin/projects/${id}`, { method: "DELETE" });
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  if (loading) return <div className="text-[#b8860b]">Yükleniyor...</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-heading font-semibold text-[#1a1a1a]">
            Portfolyo
          </h1>
          <p className="text-sm text-[#6b7280] mt-1">
            Projelerinizi yönetin.
          </p>
        </div>
        <Link
          href="/admin/portfolyo/ekle"
          className="bg-[#b8860b] hover:bg-[#a0750a] text-white px-4 py-2 rounded-lg text-sm transition-colors"
        >
          + Yeni Proje
        </Link>
      </div>

      <div className="bg-white rounded-xl border border-[#e5e2dd] overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#e5e2dd] bg-[#faf8f5]">
              <th className="text-left px-5 py-3 text-xs font-medium text-[#6b7280] uppercase tracking-wider">
                Başlık
              </th>
              <th className="text-left px-5 py-3 text-xs font-medium text-[#6b7280] uppercase tracking-wider">
                Kategori
              </th>
              <th className="text-left px-5 py-3 text-xs font-medium text-[#6b7280] uppercase tracking-wider">
                Müşteri
              </th>
              <th className="text-left px-5 py-3 text-xs font-medium text-[#6b7280] uppercase tracking-wider">
                Durum
              </th>
              <th className="text-right px-5 py-3 text-xs font-medium text-[#6b7280] uppercase tracking-wider">
                İşlem
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#e5e2dd]">
            {projects.map((project) => (
              <tr key={project.id} className="hover:bg-[#faf8f5]">
                <td className="px-5 py-4">
                  <Link
                    href={`/admin/portfolyo/${project.id}`}
                    className="text-sm font-medium text-[#1a1a1a] hover:text-[#b8860b]"
                  >
                    {project.title}
                  </Link>
                </td>
                <td className="px-5 py-4 text-sm text-[#6b7280]">
                  {project.category}
                </td>
                <td className="px-5 py-4 text-sm text-[#6b7280]">
                  {project.client || "—"}
                </td>
                <td className="px-5 py-4">
                  <button
                    onClick={() => toggleActive(project.id, project.isActive)}
                    className={`text-xs px-2 py-1 rounded-full ${
                      project.isActive
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {project.isActive ? "Aktif" : "Pasif"}
                  </button>
                </td>
                <td className="px-5 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Link
                      href={`/admin/portfolyo/${project.id}`}
                      className="text-xs text-[#b8860b] hover:text-[#a0750a]"
                    >
                      Düzenle
                    </Link>
                    <button
                      onClick={() => deleteProject(project.id)}
                      className="text-xs text-red-500 hover:text-red-700"
                    >
                      Sil
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {projects.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="px-5 py-8 text-center text-sm text-[#6b7280]"
                >
                  Henüz proje eklenmemiş.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
