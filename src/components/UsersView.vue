<template>
  <div class="container">
    <h2>Manage User</h2>
    <div class="table-wrapper">
      <table class="user-table">
        <thead>
          <tr>
            <th>NAME</th>
            <th>USERNAME</th>
            <th>EMAIL</th>
            <th>JOINED</th>
            <th>CATEGORY</th>
            <th>STATUS</th>
            <th>Usetype</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.username">
            <td>{{ user.name }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.joined }}</td>
            <td>{{ user.category }}</td>
            <td :class="{'verified': user.status === 'verified', 'not-verified': user.status === 'not verified'}">
              {{ user.status }}
            </td>
            <td>{{ user.usertype }}</td>
            <td>
              <button class="details-btn">Details</button>
              <button class="delete-btn">X</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ManageUser',
  data() {
    return {
      users: [
        { name: 'Jake', username: 'Jaker23', email: 'jb@gmail.com', joined: '25-06-2024', category: 'Food', status: 'verified', usertype: 'supplier' },
        { name: 'Mark', username: 'Mark30', email: 'mar@gmail.com', joined: '25-06-2024', category: 'Non-Food', status: 'verified', usertype: 'supplier' },// Additional user data here
        { name: 'Mark', username: 'Mark30', email: 'mar@gmail.com', joined: '25-06-2024', category: 'Non-Food', status: 'verified', usertype: 'supplier' },
        { name: 'Mark', username: 'Mark30', email: 'mar@gmail.com', joined: '25-06-2024', category: 'Non-Food', status: 'verified', usertype: 'supplier' },
        { name: 'Mark', username: 'Mark30', email: 'mar@gmail.com', joined: '25-06-2024', category: 'Non-Food', status: 'verified', usertype: 'supplier' },
        { name: 'Mark', username: 'Mark30', email: 'mar@gmail.com', joined: '25-06-2024', category: 'Non-Food', status: 'verified', usertype: 'supplier' },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.table-wrapper {
  width: 100%;
  overflow-x: auto;
}

.user-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

.user-table th, .user-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

.user-table th {
  background-color: #f2f2f2;
  font-weight: bold;
}

.verified {
  color: white;
  background-color: blue;
  border-radius: 5px;
  padding: 5px;
}

.not-verified {
  color: white;
  background-color: red;
  border-radius: 5px;
  padding: 5px;
}

.details-btn {
  background-color: #f2f2f2;
  border: none;
  padding: 5px 10px;
  margin-right: 5px;
}

.delete-btn {
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
}

h2 {
  text-align: center;
}

/* Responsive styles */
@media (max-width: 768px) {
  .user-table thead {
    display: none;
  }

  .user-table, .user-table tbody, .user-table tr, .user-table td {
    display: block;
    width: 100%;
  }

  .user-table tr {
    margin-bottom: 15px;
  }

  .user-table td {
    text-align: right;
    padding-left: 50%;
    position: relative;
  }

  .user-table td::before {
    content: attr(data-label);
    position: absolute;
    left: 0;
    width: 50%;
    padding-left: 15px;
    font-weight: bold;
    text-align: left;
  }
}
</style>
