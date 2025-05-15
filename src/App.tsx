import { useState } from "react";
import UserTable, { type User } from "./components/UserTable";
import UserModal from "./components/UserModal";

const App = () => {
  const [users, setUsers] = useState<User[]>([
    { id: 3452343234, name: "Lucas Silva", email: "lucas@example.com" },
    { id: 2234352345, name: "Mariana Costa", email: "mariana@example.com" },
    { id: 3453453443, name: "João Pereira", email: "joao@example.com" },
    { id: 4456456454, name: "Ana Souza", email: "ana@example.com" },
  ]);

  const [showModal, setShowModal] = useState(false);

  const addUser = (user: { name: string; email: string }) => {
    setUsers([...users, { id: Date.now(), ...user }]);
    setShowModal(false);
  };

  const deleteUser = (id: number) => {
    console.log("Deleting user with ID:", id);
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Cadastro de Usuários</h2>
      <button className="e-btn" onClick={() => setShowModal(true)}>
        Novo Usuário
      </button>
      <UserTable users={users} onDelete={deleteUser} />
      <UserModal
        visible={showModal}
        onClose={() => setShowModal(false)}
        onSave={addUser}
      />
    </div>
  );
};

export default App;
