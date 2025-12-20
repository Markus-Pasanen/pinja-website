import { HeroSection, ServicesPreviewSection, NewsSection } from "@/components";
import { servicesPreviews, newsArticles } from "@/constants/data";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground gap-8">
      <HeroSection
        title="Pinja Pasanen"
        description="Jalkaterapeutti, joka on erikoistunut jalkojen terveyteen ja hyvinvointiin nykyaikaisilla hoitomenetelmillä."
        ctaText="Varaa aika"
        ctaLink="/yhteystiedot"
        backgroundImage="/images/hero_background.jpg"
      />
      <ServicesPreviewSection services={servicesPreviews} />
      <NewsSection articles={newsArticles} />
    </main>
  );
}