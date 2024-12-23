import User from '@/domain/user';

class UserFactory {
  public static create(userData: {
    id: string;
    email: string;
    type: string;
    isEmailConfirmed: boolean;
  }): User {
    return new User(
      userData.id,
      userData.email,
      userData.type,
      userData.isEmailConfirmed
    );
  }
}

export default UserFactory;
