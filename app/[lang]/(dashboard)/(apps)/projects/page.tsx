import { getCompanies } from "@/actions/company";
import CompaniesView from "./companies-view";

export default async function ProjectPage() {
  const companies = await getCompanies();

  return (
    <div>
      <CompaniesView data={companies} />
    </div>
  );
}
