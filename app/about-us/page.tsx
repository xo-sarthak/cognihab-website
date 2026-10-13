import AboutUsView from "@/components/views/AboutUsView";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/about-us/");

export default function Page() {
  return <AboutUsView />;
}
