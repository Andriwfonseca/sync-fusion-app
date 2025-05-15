import { useState } from "react";
import UserTable, { type User } from "./components/UserTable";
import UserModal from "./components/UserModal";

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [showModal, setShowModal] = useState(false);

  const addUser = (user: { name: string; email: string }) => {
    setUsers([...users, { id: Date.now(), ...user }]);
    setShowModal(false);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Cadastro de Usuários</h2>
      <button className="e-btn" onClick={() => setShowModal(true)}>
        Novo Usuário
      </button>
      <UserTable users={users} />
      <UserModal
        visible={showModal}
        onClose={() => setShowModal(false)}
        onSave={addUser}
      />
    </div>
  );
};

export default App;
