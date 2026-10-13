import VisionView from "@/components/views/VisionView";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/vision/");

export default function Page() {
  return <VisionView />;
}
