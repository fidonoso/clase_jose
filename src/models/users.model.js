export const users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charlie", email: "charlie@example.com" },
  { id: 4, name: "Diana", email: "diana@example.com" },
  { id: 5, name: "Eve", email: "eve@example.com" },
  { id: 6, name: "Frank", email: "frank@example.com" },
  { id: 7, name: "Grace", email: "grace@example.com" },
  { id: 8, name: "Henry", email: "henry@example.com" }
];

export const createUser = (user) => {
  users.push(user);
  return user;
};

export const getUser = (id) => {
  return users.find((u) => u.id === id);
};

export const getAllUsers = () => {
  return users;
};

export const updateUser = (id, userData) => {
  const index = users.findIndex((u) => u.id === id);
  if (index === -1) return null;
  users[index] = { ...users[index], ...userData };
  return users[index];
};

export const deleteUser = (id) => {
  const index = users.findIndex((u) => u.id === id);
  if (index === -1) return null;
  const deleted = users.splice(index, 1)[0];
  return deleted;
};

export const userExists = (id) => {
  return users.some((u) => u.id === id);
};
