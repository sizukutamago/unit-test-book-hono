type EmailChangedEvent = { userId: string; newEmail: string };

enum UserType {
  Employee,
  Customer,
}

class User {
  constructor(
    private _id: string,
    private _email: string,
    private _type: UserType,
    private _isEmailConfirmed: boolean
  ) {}

  public get id(): string {
    return this._id;
  }

  private set id(value: string) {
    this._id = value;
  }

  public get email(): string {
    return this._email;
  }

  private set email(value: string) {
    this._email = value;
  }

  public get type(): UserType {
    return this._type;
  }

  private set type(value: UserType) {
    this._type = value;
  }

  public get isEmailConfirmed(): boolean {
    return this._isEmailConfirmed;
  }

  private set isEmailConfirmed(value: boolean) {
    this._isEmailConfirmed = value;
  }

  private _emailChangedEvents: EmailChangedEvent[] = [];

  public get emailChangedEvents(): EmailChangedEvent[] {
    return this._emailChangedEvents;
  }

  private set emailChangedEvents(value: EmailChangedEvent[]) {
    this._emailChangedEvents = value;
  }

  public canChangeEmail(): string | null {
    if (this._isEmailConfirmed) return "Can't change a confirmed email";
    return null;
  }

  public changeEmail(newEmail: string, company: Company) {
    if (this._email === newEmail) return;

    const newType = company.isEmailCorporate(newEmail)
      ? UserType.Employee
      : UserType.Customer;

    if (this._type !== newType) {
      const delta = newType === UserType.Employee ? 1 : -1;
      company.changeNumberOfEmployees(delta);
    }

    this._email = newEmail;
    this._type = newType;

    this.emailChangedEvents.push({ userId: this._id, newEmail });
  }
}

export default User;
