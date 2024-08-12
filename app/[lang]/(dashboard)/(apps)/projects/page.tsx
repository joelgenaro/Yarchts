import { getCompanies } from "@/db/queries/company";
import CompaniesView from "./companies-view";

export default async function ProjectPage() {
  const companies = await getCompanies();

  return (
    <div>
      <CompaniesView projects={companies} />
    </div>
  );
}
