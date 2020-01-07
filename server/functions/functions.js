const users = [];

const addUser = ({ id, user, room }) => {
  username = user.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = users.find((user) => user.room === room && user.username === username);

  if(!user || !room) return { error: 'Username and room are required.' };

  const userObj = { id, username, room };

  if(!existingUser) {
    users.push(userObj);
  }

  return { userObj };
}

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if(index !== -1) return users.splice(index, 1)[0];
}

const getUser = (id) => users.find((user) => user.id === id);
const getUsersInRoom = (room) => users.filter((user) => user.room === room);


module.exports = { addUser, removeUser, getUser, getUsersInRoom };