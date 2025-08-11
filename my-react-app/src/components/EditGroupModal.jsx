import React, { useState, useEffect } from "react";

function EditGroupModal({ group, onSave, onClose }) {
  const [edited, setEdited] = useState(group);

  useEffect(() => {
    setEdited(group);
  }, [group]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEdited((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(edited);
  };

  return (
    <div style={modalStyle}>
      <h3>Edit Group</h3>
      <label>Group Name:
        <input name="groupName" value={edited.groupName} onChange={handleChange} />
      </label>
      <br />
      <label>Subject:
        <input name="subject" value={edited.subject} onChange={handleChange} />
      </label>
      <br />
      <label>Description:
        <textarea name="description" value={edited.description} onChange={handleChange} />
      </label>
      <br />
      <div style={{ marginTop: "1rem" }}>
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose} style={{ marginLeft: "1rem" }}>Cancel</button>
      </div>
    </div>
  );
}

const modalStyle = {
  position: "fixed",
  top: "25%",
  left: "50%",
  transform: "translate(-50%, -25%)",
  backgroundColor: "#fff",
  padding: "1rem",
  border: "1px solid #ccc",
  borderRadius: "8px",
  zIndex: 1000,
};

export default EditGroupModal;
