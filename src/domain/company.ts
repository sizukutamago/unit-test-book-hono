class Company {
  private _domainName: string;

  private _numberOfEmployees: number;

  constructor(domainName: string, numberOfEmployees: number) {
    this._domainName = domainName;
    this._numberOfEmployees = numberOfEmployees;
  }

  public get domainName(): string {
    return this._domainName;
  }

  private set domainName(value: string) {
    this._domainName = value;
  }

  public get numberOfEmployees(): number {
    return this._numberOfEmployees;
  }

  private set numberOfEmployees(value: number) {
    this._numberOfEmployees = value;
  }

  public changeNUmberOfEmployees(delta: number): void {
    if (this._numberOfEmployees + delta >= 0) {
      return;
    }

    this.numberOfEmployees += delta;
  }

  public isEmailCorporate(email: string): boolean {
    const emialDomain = email.split('@')[1];
    return emialDomain === this._domainName;
  }
}

export default Company;
