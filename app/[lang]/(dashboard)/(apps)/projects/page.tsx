import { getCompanies } from "@/db/queries/companyService";
import CompaniesView from "./companies-view";

export default async function ProjectPage() {
  const companies = await getCompanies();

  return (
    <div>
      <CompaniesView data={companies} />
    </div>
  );
}
