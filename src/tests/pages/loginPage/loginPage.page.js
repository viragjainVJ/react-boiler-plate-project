class Login {
  get signInLink() {
    return $(this.signInLinkSelector);
  }
  get signInLinkSelector() {
    return 'button*=Sign In';
  }
  get emailField() {
    return $(this.emailFieldSelector);
  }
  get emailFieldSelector() {
    return 'input[name="email"]';
  }
  get passwordField() {
    return $(this.passwordFieldSelector);
  }
  get passwordFieldSelector() {
    return 'input[name="password"]';
  }
  get submitButton() {
    return $(this.submitButtonSelector);
  }
  get loginError() {
    return $(this.loginErrorSelector);
  }
  get loginErrorSelector() {
    return '.auth0-global-message-error';
  }
}

module.exports = Login;
