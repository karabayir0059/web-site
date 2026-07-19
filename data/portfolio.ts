export type PortfolioItem = {
  title: string;
  category: "web-sitesi" | "otomasyon" | "altyapi";
  description: string;
  imageSrc: string;
  projectUrl: string;
  tags: string[];
  featured?: boolean;
  order?: number;
};

export const portfolioItems: PortfolioItem[] = [
  {
    title: "Velihat Burger",
    category: "web-sitesi",
    description:
      "Modern restoran sitesi. Online menü, iletişim odaklı yapı ve mobil öncelikli tasarım.",
    imageSrc: "/images/portfolio/velihat-burger.jpg",
    projectUrl: "https://hamburger-psi-ruby.vercel.app",
    tags: ["Restoran", "Mobil uyumlu", "Online menü"],
    featured: true,
    order: 1,
  },
  {
    title: "Gönlü Bol İçecek",
    category: "web-sitesi",
    description:
      "İçecek markası için sade ve etkileyici kurumsal tanıtım sitesi.",
    imageSrc: "/images/portfolio/gonlu-bol-icecek.jpg",
    projectUrl: "https://icecek-sitesi.vercel.app",
    tags: ["Marka sitesi", "Kurumsal", "Tanıtım"],
    featured: true,
    order: 2,
  },
  {
    title: "Müptela Tatlı",
    category: "web-sitesi",
    description:
      "Premium tatlıcı ve kafe için özel tasarım, galeri ve menü entegrasyonu.",
    imageSrc: "/images/portfolio/muptela-tatli.jpg",
    projectUrl: "https://tatlici-sitesi.vercel.app",
    tags: ["Kafe", "Premium tasarım", "Galeri"],
    featured: true,
    order: 3,
  },
  {
    title: "Empat Klinik",
    category: "web-sitesi",
    description:
      "Veteriner kliniği için randevu odaklı kurumsal web sitesi.",
    imageSrc: "/images/portfolio/empat-klinik.jpg",
    projectUrl: "https://veteriner-klinik.vercel.app",
    tags: ["Sağlık", "Kurumsal", "Randevu"],
    featured: true,
    order: 4,
  },
  {
    title: "Evval Otel",
    category: "web-sitesi",
    description:
      "Butik otel için rezervasyon ve tanıtım odaklı şık bir otel sitesi.",
    imageSrc: "/images/portfolio/evval-otel.jpg",
    projectUrl: "https://evval-otel.vercel.app",
    tags: ["Otel", "Rezervasyon", "Butik"],
    featured: true,
    order: 5,
  },
  {
    title: "RD Mimarlık",
    category: "web-sitesi",
    description:
      "Modern mimari anlayışıyla estetik ve işlevselliği birleştiren mimarlık ofisi için kurumsal web sitesi ve proje portföyü.",
    imageSrc: "/images/portfolio/rd-mimarlik.jpg",
    projectUrl: "https://rd-mimarlik.vercel.app",
    tags: ["Mimarlık", "Kurumsal", "Portföy"],
    featured: true,
    order: 6,
  },
];
