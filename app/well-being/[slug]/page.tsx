import UseCasePage, { useCaseParams } from "@/components/UseCasePage";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;
export const generateStaticParams = () => useCaseParams("well-being");

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return pageMetadata(`/well-being/${(await params).slug}/`);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  return <UseCasePage programme="well-being" slug={(await params).slug} />;
}
