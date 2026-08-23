import ImpactDocumentationYearPage from "@/components/impact/ImpactDocumentationYearPage";
import { impactDocumentationYears } from "@/lib/impactDocumentation";

export default function ImpactDocumentation2023Page() {
  return <ImpactDocumentationYearPage {...impactDocumentationYears[2023]} />;
}
