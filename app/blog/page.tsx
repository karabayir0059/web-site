import Link from "next/link";

import { CtaBanner } from "@/components/sections/cta-banner";
import { PageHeader } from "@/components/sections/page-header";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { buttonStyles } from "@/components/ui/button";
import { blogPosts } from "@/data/blog-posts";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Blog",
  description:
    "Kurumsal web, e-posta altyapısı ve otomasyon kararlarını kolaylaştıran Türkçe blog ve rehber içerik listesi.",
  keywords: ["blog", "rehber", "kurumsal web", "otomasyon rehberi"],
});

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog / Rehber"
        title="Uzmanlık algısını teknik gösterişle değil, karar vermeyi kolaylaştıran içeriklerle destekleyen editorial bir blog yapısı."
        description="Bu sayfa yalnızca listeleme amacı taşır; içerik başlıkları, hangi konu başlıklarında rehber üretilebileceğini ve hangi hizmet alanına bağlandığını gösterir."
        asideTitle="İçerik rolü"
        asideItems={[
          "Organik görünürlüğe alan açmak",
          "Hizmet kararını kolaylaştırmak",
          "Güven ve uzmanlık algısını desteklemek",
        ]}
      />

      <section className="pb-16 sm:pb-20">
        <Container className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.title} className="h-full">
              <div className="flex h-full flex-col gap-5">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge tone="soft">{post.category}</Badge>
                  <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted">{post.readTime}</span>
                </div>
                <div className="space-y-3">
                  <h2 className="font-heading text-2xl tracking-[-0.04em] text-foreground">{post.title}</h2>
                  <p className="text-base leading-7 text-muted">{post.excerpt}</p>
                </div>
                <div className="mt-auto flex items-center justify-between gap-4 border-t border-border/70 pt-4">
                  <p className="text-sm text-muted">İlgili sayfa</p>
                  <Link href={post.relatedRoute} className={buttonStyles({ variant: "ghost" })}>
                    İlgili hizmete geç
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </Container>
      </section>

      <CtaBanner
        title="Hangi içeriğin işletmenize daha yakın olduğunu konuşalım; ardından doğru hizmet akışına birlikte geçelim."
        description="Blog burada SEO ve güven desteği için konumlanıyor. Gerçek içerik üretimi sırasında aynı editorial dili koruyarak ayrıntılı rehberler eklenebilir."
      />
    </>
  );
}
