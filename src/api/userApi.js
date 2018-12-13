async function userAuthentication(payload) {
  return {
    username: payload.username,
    redirectToHome: true,
    designation: 'Software Engineer',
    company: 'Talentica Software'
  };
}

export { userAuthentication };
