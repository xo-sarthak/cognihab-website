import RehabilitationView from "@/components/views/RehabilitationView";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/rehabilitation/");

export default function Page() {
  return <RehabilitationView />;
}
