import PatentView from "@/components/views/PatentView";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/patent/");

export default function Page() {
  return <PatentView />;
}
