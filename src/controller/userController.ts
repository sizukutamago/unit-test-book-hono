import UserFactory from '@/domain/factory/userFactory';

class UserController {
  private _database = new Database();

  private _messageBus = new MessageBus();

  public changeEmail(userId: number, newEmail: string) {
    const userData = this._database.getUserById(userId);
    const user = UserFactory.create(userData);

    const error = user.canChangeEmail();
    if (error) return error;

    const companyData = this._database.getCompany();
    const company = CompanyFactory.create(companyData);

    user.changeEmail(newEmail, company);

    this._database.saveCompany(company);
    this._database.saveUser(user);

    user.emailChangedEvents.forEach((event) => {
      this._messageBus.sendEmailChangedMessage(event.userId, event.newEmail);
    });

    return 'OK';
  }
}

export default UserController;
