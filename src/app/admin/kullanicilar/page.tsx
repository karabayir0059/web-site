"use client";

import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/admin/users")
      .then((r) => r.json())
      .then((data) => {
        setUsers(Array.isArray(data) ? data : []);
        setLoading(false);
      });
  }, []);

  const createUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/admin/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      const newUser = await res.json();
      setUsers((prev) => [...prev, newUser]);
      setShowForm(false);
      setForm({ name: "", email: "", password: "" });
    } else {
      const data = await res.json();
      setError(data.error || "Bir hata oluştu");
    }
  };

  const deleteUser = async (id: number) => {
    if (!confirm("Bu kullanıcıyı silmek istediğinize emin misiniz?")) return;
    await fetch(`/api/admin/users/${id}`, { method: "DELETE" });
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  if (loading)
    return <div className="text-[#b8860b]">Yükleniyor...</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-heading font-semibold text-[#1a1a1a]">
            Kullanıcılar
          </h1>
          <p className="text-sm text-[#6b7280] mt-1">
            Admin panel kullanıcılarını yönetin.
          </p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-[#b8860b] hover:bg-[#a0750a] text-white px-4 py-2 rounded-lg text-sm transition-colors"
        >
          + Yeni Kullanıcı
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={createUser}
          className="bg-white rounded-xl border border-[#e5e2dd] p-6 space-y-4"
        >
          {error && (
            <div className="bg-red-50 text-red-700 text-sm px-4 py-3 rounded-lg border border-red-200">
              {error}
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Ad Soyad
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-3 py-2 border border-[#e5e2dd] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a961]/50"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                E-posta
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-3 py-2 border border-[#e5e2dd] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a961]/50"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Şifre
              </label>
              <input
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full px-3 py-2 border border-[#e5e2dd] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a961]/50"
                required
              />
            </div>
          </div>
          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-[#b8860b] text-white px-4 py-2 rounded-lg text-sm"
            >
              Oluştur
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="text-sm text-[#6b7280]"
            >
              İptal
            </button>
          </div>
        </form>
      )}

      <div className="bg-white rounded-xl border border-[#e5e2dd] overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#e5e2dd] bg-[#faf8f5]">
              <th className="text-left px-5 py-3 text-xs font-medium text-[#6b7280] uppercase">
                Ad
              </th>
              <th className="text-left px-5 py-3 text-xs font-medium text-[#6b7280] uppercase">
                E-posta
              </th>
              <th className="text-left px-5 py-3 text-xs font-medium text-[#6b7280] uppercase">
                Rol
              </th>
              <th className="text-right px-5 py-3 text-xs font-medium text-[#6b7280] uppercase">
                İşlem
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#e5e2dd]">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-[#faf8f5]">
                <td className="px-5 py-4 text-sm font-medium text-[#1a1a1a]">
                  {user.name}
                </td>
                <td className="px-5 py-4 text-sm text-[#6b7280]">
                  {user.email}
                </td>
                <td className="px-5 py-4">
                  <span className="text-xs bg-[#b8860b]/5 text-[#b8860b] px-2 py-1 rounded-full">
                    {user.role}
                  </span>
                </td>
                <td className="px-5 py-4 text-right">
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="text-xs text-red-500 hover:text-red-700"
                  >
                    Sil
                  </button>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan={4} className="text-center text-sm text-[#6b7280] py-8">
                  Henüz kullanıcı yok.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
