// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_PUBLIC = '/';
const ROOTS_AUTH = '/auth';
const ROOTS_DASHBOARD = '/dashboard';

// ----------------------------------------------------------------------

export const PATH_PUBLIC = {
  root: ROOTS_PUBLIC,
};

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
  register: path(ROOTS_AUTH, '/register'),
  forgotPassword: path(ROOTS_AUTH, '/forgot-password'),
  resetPassword: path(ROOTS_AUTH, '/reset-password'),
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
};
