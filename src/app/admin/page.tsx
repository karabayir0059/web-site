"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface DashboardData {
  servicesCount: number;
  projectsCount: number;
  messagesCount: number;
  unreadMessages: number;
  recentMessages: {
    id: number;
    name: string;
    email: string;
    subject: string | null;
    createdAt: string;
  }[];
}

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    fetch("/api/admin/dashboard")
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-[#b8860b]">Yükleniyor...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-heading font-semibold text-[#1a1a1a]">
          Dashboard
        </h1>
        <p className="text-sm text-[#6b7280] mt-1">
          Hoş geldiniz, {session?.user?.name}
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-[#e5e2dd] p-5">
          <div className="text-3xl font-heading font-bold text-[#b8860b]">
            {data?.servicesCount ?? "..."}
          </div>
          <div className="text-sm text-[#6b7280] mt-1">Hizmet</div>
        </div>
        <div className="bg-white rounded-xl border border-[#e5e2dd] p-5">
          <div className="text-3xl font-heading font-bold text-[#b8860b]">
            {data?.projectsCount ?? "..."}
          </div>
          <div className="text-sm text-[#6b7280] mt-1">Proje</div>
        </div>
        <div className="bg-white rounded-xl border border-[#e5e2dd] p-5">
          <div className="text-3xl font-heading font-bold text-[#b8860b]">
            {data?.messagesCount ?? "..."}
          </div>
          <div className="text-sm text-[#6b7280] mt-1">Toplam Mesaj</div>
        </div>
        <div className="bg-white rounded-xl border border-[#e5e2dd] p-5">
          <div className="text-3xl font-heading font-bold text-[#b8860b]">
            {data?.unreadMessages ?? "..."}
          </div>
          <div className="text-sm text-[#6b7280] mt-1">Okunmamış</div>
        </div>
      </div>

      {/* Recent Messages */}
      <div className="bg-white rounded-xl border border-[#e5e2dd]">
        <div className="px-5 py-4 border-b border-[#e5e2dd] flex items-center justify-between">
          <h2 className="font-heading font-semibold text-[#1a1a1a]">
            Son Mesajlar
          </h2>
          <Link
            href="/admin/mesajlar"
            className="text-sm text-[#b8860b] hover:text-[#a0750a] transition-colors"
          >
            Tümünü Gör
          </Link>
        </div>
        <div className="divide-y divide-[#e5e2dd]">
          {data?.recentMessages?.length ? (
            data.recentMessages.map((msg) => (
              <div
                key={msg.id}
                className="px-5 py-3 flex items-center justify-between"
              >
                <div>
                  <div className="text-sm font-medium text-[#1a1a1a]">
                    {msg.name}
                  </div>
                  <div className="text-xs text-[#6b7280]">
                    {msg.subject || "Konusuz"} — {msg.email}
                  </div>
                </div>
                <div className="text-xs text-[#6b7280]">
                  {new Date(msg.createdAt).toLocaleDateString("tr-TR")}
                </div>
              </div>
            ))
          ) : (
            <div className="px-5 py-8 text-center text-sm text-[#6b7280]">
              Henüz mesaj yok.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
