class EmailChangedEvent {
  constructor(
    private _userId: string,
    private _newEmail: string
  ) {
    this._userId = _userId;
    this._newEmail = _newEmail;
  }

  public get userId(): string {
    return this._userId;
  }

  private set userId(value: string) {
    this._userId = value;
  }

  public get newEmail(): string {
    return this._newEmail;
  }

  private set newEmail(value: string) {
    this._newEmail = value;
  }
}

export default EmailChangedEvent;
