import type Company from '@/domain/company';
import type User from '@/domain/user';

import prisma from '@/libs/prisma';

class Database {
  public async saveUser(user: User) {
    await prisma.user.update({ where: { id: user.id }, data: { ...user } });
  }

  public async saveCompany(company: Company) {
    await prisma.company.update({
      where: { companyDomainName: company.domainName },
      data: { ...company },
    });
  }

  public async getUserById(
    userId: string
  ): Promise<{ id: string; email: string; userType: number } | null> {
    return prisma.user.findUnique({ where: { id: userId } });
  }

  public async getCompany(): Promise<{
    domainName: string;
    numberOfEmployees: number;
  }> {
    const company = await prisma.company.findFirst();
    if (!company) {
      throw new Error('Company not found');
    }
    return {
      domainName: company.companyDomainName,
      numberOfEmployees: company.numberOfEmployees,
    };
  }
}

export default Database;
