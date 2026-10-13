import AdvisorsView from "@/components/views/AdvisorsView";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/advisors/");

export default function Page() {
  return <AdvisorsView />;
}
