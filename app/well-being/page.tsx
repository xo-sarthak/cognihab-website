import WellBeingView from "@/components/views/WellBeingView";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/well-being/");

export default function Page() {
  return <WellBeingView />;
}
