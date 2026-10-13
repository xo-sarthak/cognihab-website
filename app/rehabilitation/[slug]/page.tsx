import UseCasePage, { useCaseParams } from "@/components/UseCasePage";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;
export const generateStaticParams = () => useCaseParams("rehabilitation");

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return pageMetadata(`/rehabilitation/${(await params).slug}/`);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  return <UseCasePage programme="rehabilitation" slug={(await params).slug} />;
}
