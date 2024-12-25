import Company from '@/domain/company';

class CompanyFactory {
  public static create(companyData: {
    domainName: string;
    numberOfEmployees: number;
  }): Company {
    return new Company(companyData.domainName, companyData.numberOfEmployees);
  }
}

export default CompanyFactory;
