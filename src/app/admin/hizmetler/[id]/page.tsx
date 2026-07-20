"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ServiceForm from "../ServiceForm";

interface ServiceData {
  id: number;
  title: string;
  shortDesc: string;
  description: string;
  icon: string;
  price: string;
  features: string[];
  order: number;
  isActive: boolean;
}

export default function EditServicePage() {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<ServiceData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/admin/services/${id}`)
      .then((r) => r.json())
      .then((service) => {
        if (service && service.id) {
          setData({
            ...service,
            features: JSON.parse(service.features || "[]"),
          });
        }
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-[#b8860b]">Yükleniyor...</div>;
  if (!data) return <div className="text-red-500">Hizmet bulunamadı.</div>;

  return <ServiceForm initialData={data} />;
}
