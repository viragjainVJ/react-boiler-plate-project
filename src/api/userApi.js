async function userAuthenticationAPI(payload) {
  return {
    username: payload.username,
    redirectToHome: true,
    designation: 'Software Engineer',
    company: 'Talentica Software'
  };
}

export { userAuthenticationAPI };
