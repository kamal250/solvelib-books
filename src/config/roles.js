const allRoles = {
  user: ['manageBooks'],
  admin: ['getUsers', 'manageUsers', 'manageBooks'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
