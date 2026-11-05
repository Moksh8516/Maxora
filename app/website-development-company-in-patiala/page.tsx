// app/website-development-company-in-patiala/page.tsx
import DynamicLandingPage, {
  generateMetadata as dynamicMetadata,
} from "../[slug]/page";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata() {
  return dynamicMetadata({
    params: Promise.resolve({ slug: "website-development-company-in-patiala" }),
  });
}

export default function Page() {
  return (
    <DynamicLandingPage
      params={Promise.resolve({ slug: "website-development-company-in-patiala" })}
    />
  );
}
