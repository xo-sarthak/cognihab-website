import HomeView from "@/components/views/HomeView";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/");

export default function Page() {
  return <HomeView />;
}
