import ImpactDocumentationYearPage from "@/components/impact/ImpactDocumentationYearPage";
import { impactDocumentationYears } from "@/lib/impactDocumentation";

export default function ImpactDocumentation2022Page() {
  return <ImpactDocumentationYearPage {...impactDocumentationYears[2022]} />;
}
