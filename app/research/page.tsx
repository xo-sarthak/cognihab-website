import ResearchView from "@/components/views/ResearchView";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/research/");

export default function Page() {
  return <ResearchView />;
}
