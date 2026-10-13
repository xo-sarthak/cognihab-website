import UseCasePage, { useCaseParams } from "@/components/UseCasePage";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;
export const generateStaticParams = () => useCaseParams("vision");

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return pageMetadata(`/vision/${(await params).slug}/`);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  return <UseCasePage programme="vision" slug={(await params).slug} />;
}
