/**
 * @description firebase 로그인 시 뱉는 에러
 */
const LoginError = (msg) => {
  let errorMessage = '';
  switch (msg) {
    case 'The email address is already in use by another account.':
      errorMessage = '* 이미 가입된 이메일입니다.';
      break;
    case 'Password should be at least 6 characters':
      errorMessage = '* 비밀번호는 최소 6자 입니다.';
      break;
    case 'There is no user record corresponding to this identifier. The user may have been deleted.':
      errorMessage = '* 일치하는 계정이 존재하지 않습니다.';
      break;
    case 'The password is invalid or the user does not have a password.':
      errorMessage =
        '* 비밀번호가 일치하지 않거나 비밀번호가 존재하지 않는 계정입니다.';
      break;
    case 'Too many unsuccessful login attempts. Please try again later.':
      errorMessage =
        '* 부적절한 로그인이 지속되어, 잠시 후에 다시 시도해 주시기 바랍니다.';
      break;
    default:
      errorMessage = msg;
  }
  return errorMessage;
};

export default LoginError;
