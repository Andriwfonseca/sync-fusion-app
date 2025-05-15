import React, { useState } from "react";
import { DialogComponent } from "@syncfusion/ej2-react-popups";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

import "@syncfusion/ej2-react-popups/styles/material.css";
import "@syncfusion/ej2-react-inputs/styles/material.css";
import "@syncfusion/ej2-react-buttons/styles/material.css";

interface Props {
  visible: boolean;
  onClose: () => void;
  onSave: (user: { name: string; email: string }) => void;
}

const UserModal: React.FC<Props> = ({ visible, onClose, onSave }) => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const save = () => {
    if (formData.name && formData.email) {
      onSave(formData);
      setFormData({ name: "", email: "" });
    }
  };

  return (
    <DialogComponent
      visible={visible}
      header="Novo Usuário"
      showCloseIcon
      width="400px"
      close={onClose}
      footerTemplate={() => (
        <div style={{ textAlign: "right" }}>
          <ButtonComponent cssClass="e-flat" onClick={onClose}>
            Cancelar
          </ButtonComponent>
          <ButtonComponent
            cssClass="e-primary"
            onClick={save}
            style={{ marginLeft: "10px" }}
          >
            Salvar
          </ButtonComponent>
        </div>
      )}
    >
      <div style={{ padding: "10px" }}>
        <div style={{ marginBottom: "10px" }}>
          <label>Nome:</label>
          <TextBoxComponent
            placeholder="Digite o nome"
            floatLabelType="Auto"
            value={formData.name}
            change={(e: { value: string }) => handleChange("name", e.value)}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label>
          <TextBoxComponent
            placeholder="Digite o email"
            floatLabelType="Auto"
            value={formData.email}
            change={(e: { value: string }) => handleChange("email", e.value)}
          />
        </div>
      </div>
    </DialogComponent>
  );
};

export default UserModal;
