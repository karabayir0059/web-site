import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // Admin kullanıcı oluştur
  const hashedPassword = await bcrypt.hash("admin123", 12);

  await prisma.user.upsert({
    where: { email: "admin@websitesiotomasyon.com" },
    update: {},
    create: {
      name: "Admin",
      email: "admin@websitesiotomasyon.com",
      password: hashedPassword,
      role: "admin",
    },
  });

  // Varsayılan site ayarları
  const defaultSettings = [
    {
      key: "site_name",
      value: JSON.stringify("Web Site & Otomasyon"),
    },
    {
      key: "site_description",
      value: JSON.stringify(
        "Profesyonel web sitesi, otomasyon ve e-posta yönetimi hizmetleri"
      ),
    },
    {
      key: "whatsapp",
      value: JSON.stringify({ number: "", message: "Merhaba, web siteniz hakkında bilgi almak istiyorum." }),
    },
    {
      key: "email",
      value: JSON.stringify("info@websitesiotomasyon.com"),
    },
    {
      key: "phone",
      value: JSON.stringify(""),
    },
    {
      key: "address",
      value: JSON.stringify("İstanbul, Türkiye"),
    },
    {
      key: "social_links",
      value: JSON.stringify({
        instagram: "",
        linkedin: "",
        twitter: "",
      }),
    },
    {
      key: "hero_title",
      value: JSON.stringify("Dijital Dönüşümünüz İçin Profesyonel Çözümler"),
    },
    {
      key: "hero_subtitle",
      value: JSON.stringify(
        "Web sitesi, otomasyon ve e-posta yönetimi hizmetleriyle işinizi büyütün."
      ),
    },
  ];

  for (const setting of defaultSettings) {
    await prisma.siteSetting.upsert({
      where: { key: setting.key },
      update: {},
      create: setting,
    });
  }

  // Varsayılan SEO ayarları
  const defaultSEOSettings = [
    {
      page: "home",
      metaTitle: "Web Site & Otomasyon | Profesyonel Dijital Çözümler",
      metaDescription:
        "Web sitesi geliştirme, iş süreçleri otomasyonu ve e-posta yönetimi hizmetleri. İşletmenizi dijital dönüşümle tanıştırın.",
    },
    {
      page: "about",
      metaTitle: "Hakkımızda | Web Site & Otomasyon",
      metaDescription:
        "Web Site & Otomasyon olarak dijital çözümler sunuyoruz. Misyonumuz, işletmelerin dijital potansiyelini ortaya çıkarmak.",
    },
    {
      page: "services",
      metaTitle: "Hizmetlerimiz | Web Site & Otomasyon",
      metaDescription:
        "Web geliştirme, otomasyon ve e-posta yönetimi hizmetlerimizi keşfedin.",
    },
    {
      page: "portfolio",
      metaTitle: "Çalışmalarımız | Web Site & Otomasyon",
      metaDescription:
        "Tamamladığımız projeleri keşfedin. Her proje, müşteri memnuniyeti ve kalite odaklı geliştirildi.",
    },
    {
      page: "contact",
      metaTitle: "İletişim | Web Site & Otomasyon",
      metaDescription:
        "Bizimle iletişime geçin. Projeniz için ücretsiz danışmanlık alın.",
    },
  ];

  for (const seo of defaultSEOSettings) {
    await prisma.seoSettings.upsert({
      where: { page: seo.page },
      update: {},
      create: seo,
    });
  }

  console.log("Seed tamamlandı!");
  console.log("Admin giriş: admin@websitesiotomasyon.com / admin123");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
