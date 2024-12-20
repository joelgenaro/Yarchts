import { getCompanies } from "@/actions/company";
import CompaniesView from "@/components/companies/view";

export default async function CompaniesPage() {
  const companies = await getCompanies();

  return (
    <div>
      <CompaniesView data={companies} />
    </div>
  );
}
