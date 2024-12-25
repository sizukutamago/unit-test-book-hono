class MessageBus {
  // eslint-disable-next-line class-methods-use-this
  public sendEmailChangedMessage(userId: string, newEmail: string) {
    console.log(`Email changed for user ${userId} to ${newEmail}`);
  }
}

export default MessageBus;
