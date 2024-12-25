import Database from '@/adapter/database';
import MessageBus from '@/adapter/messageBus';
import CompanyFactory from '@/domain/factory/companyFactory';
import UserFactory from '@/domain/factory/userFactory';

class UserController {
  private _database = new Database();

  private _messageBus = new MessageBus();

  public async changeEmail(userId: string, newEmail: string) {
    const userData = await this._database.getUserById(userId);
    if (!userData) {
      return 'User not found';
    }
    const user = UserFactory.create({
      id: userData.id,
      email: userData.email,
      type: userData.userType,
      isEmailConfirmed: false, // or some default value
    });

    const error = user.canChangeEmail();
    if (error) return error;

    const companyData = await this._database.getCompany();
    const company = CompanyFactory.create(companyData);

    user.changeEmail(newEmail, company);

    await this._database.saveCompany(company);
    await this._database.saveUser(user);

    user.emailChangedEvents.forEach((event) => {
      this._messageBus.sendEmailChangedMessage(event.userId, event.newEmail);
    });

    return 'OK';
  }
}

export default UserController;
