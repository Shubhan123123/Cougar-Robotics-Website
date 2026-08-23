import ImpactDocumentationYearPage from "@/components/impact/ImpactDocumentationYearPage";
import { impactDocumentationYears } from "@/lib/impactDocumentation";

export default function ImpactDocumentation2025Page() {
  return <ImpactDocumentationYearPage {...impactDocumentationYears[2025]} />;
}
