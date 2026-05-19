// Crud.jsx
import { useState, useEffect } from "react";

export default function Crud() {
  // Clave para localStorage
  const STORAGE_KEY = "crud_items";

  // Función para cargar datos desde localStorage o usar los datos por defecto
  const loadInitialItems = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
    // Datos de ejemplo iniciales
    return [
      { id: 1, nombre: "JavaScript", descripcion: "Lenguaje de programación interpretado" },
      { id: 2, nombre: "React", descripcion: "Biblioteca para construir interfaces de usuario" },
      { id: 3, nombre: "Node.js", descripcion: "Entorno para ejecutar JavaScript en el servidor" },
    ];
  };

  const [items, setItems] = useState(loadInitialItems);

  // Guardar en localStorage cada vez que cambien los items
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  // Estado del modal
  const [modal, setModal] = useState({
    open: false,
    type: null, // 'view', 'edit', 'create'
    data: null,
  });

  // Estado para el formulario del modal (usado en create/edit)
  const [formData, setFormData] = useState({ nombre: "", descripcion: "" });

  // Abrir modal de ver (Consulta)
  const handleView = (item) => {
    setModal({ open: true, type: "view", data: item });
  };

  // Abrir modal de editar (Actualización)
  const handleEdit = (item) => {
    setFormData({ nombre: item.nombre, descripcion: item.descripcion });
    setModal({ open: true, type: "edit", data: item });
  };

  // Eliminar (Eliminación)
  const handleDelete = (id) => {
    if (window.confirm("¿Estás seguro de eliminar este registro?")) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  // Guardar cambios (edición)
  const handleUpdate = () => {
    if (!formData.nombre.trim() || !formData.descripcion.trim()) {
      alert("Todos los campos son obligatorios");
      return;
    }
    const updatedItems = items.map((item) =>
      item.id === modal.data.id
        ? { ...item, nombre: formData.nombre, descripcion: formData.descripcion }
        : item
    );
    setItems(updatedItems);
    closeModal();
  };

  // Crear nuevo registro (Alta)
  const handleCreate = () => {
    if (!formData.nombre.trim() || !formData.descripcion.trim()) {
      alert("Todos los campos son obligatorios");
      return;
    }
    const newId = items.length > 0 ? Math.max(...items.map((i) => i.id)) + 1 : 1;
    const newItem = { id: newId, nombre: formData.nombre, descripcion: formData.descripcion };
    setItems([...items, newItem]);
    closeModal();
  };

  // Cerrar modal y resetear estados
  const closeModal = () => {
    setModal({ open: false, type: null, data: null });
    setFormData({ nombre: "", descripcion: "" });
  };

  return (
    <div className="crud-container">
      {/* Estilos CSS (dark mode) - igual que antes */}
      <style>{`
        .crud-container {
          background: #0f0f1a;
          min-height: 100vh;
          padding: 2rem;
          font-family: 'Segoe UI', Roboto, system-ui, sans-serif;
          color: #eef2ff;
        }
        .crud-card {
          background: #1e1e2f;
          border-radius: 1.5rem;
          padding: 1.5rem;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
          border: 1px solid #2d2d44;
        }
        .crud-title {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #a78bfa, #60a5fa);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .btn-primary {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          border: none;
          color: white;
          padding: 0.6rem 1.2rem;
          border-radius: 2rem;
          font-weight: 600;
          cursor: pointer;
          transition: 0.2s;
          margin-bottom: 1.2rem;
          font-size: 0.9rem;
        }
        .btn-primary:hover {
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          transform: translateY(-1px);
        }
        .crud-table-wrapper {
          overflow-x: auto;
        }
        .crud-table {
          width: 100%;
          border-collapse: collapse;
          background: #1a1a2c;
          border-radius: 1rem;
          overflow: hidden;
        }
        .crud-table th,
        .crud-table td {
          padding: 1rem;
          text-align: left;
          border-bottom: 1px solid #2d2d44;
        }
        .crud-table th {
          background: #25253a;
          color: #cbd5e6;
          font-weight: 600;
          letter-spacing: 0.5px;
        }
        .crud-table tr:hover {
          background: #2a2a3f;
        }
        .action-buttons {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .btn-view {
          background: #334155;
          color: #b9e6ff;
          border: none;
          padding: 0.3rem 0.8rem;
          border-radius: 1.5rem;
          cursor: pointer;
          font-size: 0.8rem;
          font-weight: 500;
          transition: 0.2s;
        }
        .btn-view:hover {
          background: #475569;
        }
        .btn-edit {
          background: #2d4a22;
          color: #bef264;
          border: none;
          padding: 0.3rem 0.8rem;
          border-radius: 1.5rem;
          cursor: pointer;
          font-size: 0.8rem;
          font-weight: 500;
        }
        .btn-edit:hover {
          background: #3f6212;
        }
        .btn-delete {
          background: #7f1a1a;
          color: #fecaca;
          border: none;
          padding: 0.3rem 0.8rem;
          border-radius: 1.5rem;
          cursor: pointer;
          font-size: 0.8rem;
          font-weight: 500;
        }
        .btn-delete:hover {
          background: #991b1b;
        }
        /* Modal oscuro */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .modal-content {
          background: #1e1e2e;
          border-radius: 1.5rem;
          width: 90%;
          max-width: 450px;
          padding: 1.8rem;
          border: 1px solid #3b3b5c;
          box-shadow: 0 20px 35px rgba(0, 0, 0, 0.5);
        }
        .modal-content h3 {
          margin-top: 0;
          color: #c4b5fd;
        }
        .modal-content input,
        .modal-content textarea {
          width: 100%;
          padding: 0.7rem;
          margin: 0.5rem 0 1rem;
          background: #0f0f1a;
          border: 1px solid #3b3b5c;
          border-radius: 0.8rem;
          color: #eef2ff;
          font-size: 1rem;
        }
        .modal-content label {
          font-weight: 500;
          font-size: 0.9rem;
          color: #a5b4fc;
        }
        .modal-buttons {
          display: flex;
          justify-content: flex-end;
          gap: 0.8rem;
          margin-top: 1.2rem;
        }
        .modal-buttons button {
          padding: 0.5rem 1.2rem;
          border-radius: 2rem;
          border: none;
          cursor: pointer;
          font-weight: 600;
        }
        .btn-save {
          background: #3b82f6;
          color: white;
        }
        .btn-cancel {
          background: #334155;
          color: #e2e8f0;
        }
        .readonly-field {
          background: #0f0f1a;
          padding: 0.6rem;
          border-radius: 0.8rem;
          margin: 0.5rem 0;
          border: 1px solid #3b3b5c;
          color: #cbd5e1;
        }
        @media (max-width: 640px) {
          .crud-container {
            padding: 1rem;
          }
          .action-buttons {
            flex-direction: column;
          }
        }
      `}</style>

      <div className="crud-card">
        <h2 className="crud-title">📋 CRUD - Programación Web (con persistencia)</h2>

        {/* Botón de Alta (Create) */}
        <button
          className="btn-primary"
          onClick={() => {
            setFormData({ nombre: "", descripcion: "" });
            setModal({ open: true, type: "create", data: null });
          }}
        >
          + Nuevo Registro (Alta)
        </button>

        <div className="crud-table-wrapper">
          <table className="crud-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Acciones (Consulta / Actualización / Eliminación)</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.nombre}</td>
                  <td>{item.descripcion}</td>
                  <td>
                    <div className="action-buttons">
                      <button className="btn-view" onClick={() => handleView(item)}>
                        🔍 Ver (Consulta)
                      </button>
                      <button className="btn-edit" onClick={() => handleEdit(item)}>
                        ✏️ Editar (Actualización)
                      </button>
                      <button className="btn-delete" onClick={() => handleDelete(item.id)}>
                        🗑️ Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {items.length === 0 && (
                <tr>
                  <td colSpan="4" style={{ textAlign: "center", padding: "2rem" }}>
                    No hay registros. Usa "Alta" para agregar.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL para Consulta, Actualización y Alta (sin cambios) */}
      {modal.open && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {modal.type === "view" && (
              <>
                <h3>🔎 Consulta de registro</h3>
                <label>ID:</label>
                <div className="readonly-field">{modal.data.id}</div>
                <label>Nombre:</label>
                <div className="readonly-field">{modal.data.nombre}</div>
                <label>Descripción:</label>
                <div className="readonly-field">{modal.data.descripcion}</div>
                <div className="modal-buttons">
                  <button className="btn-cancel" onClick={closeModal}>
                    Cerrar
                  </button>
                </div>
              </>
            )}

            {modal.type === "edit" && (
              <>
                <h3>✏️ Actualización de registro (ID: {modal.data.id})</h3>
                <label>Nombre:</label>
                <input
                  type="text"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                />
                <label>Descripción:</label>
                <textarea
                  rows="3"
                  value={formData.descripcion}
                  onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
                />
                <div className="modal-buttons">
                  <button className="btn-cancel" onClick={closeModal}>
                    Cancelar
                  </button>
                  <button className="btn-save" onClick={handleUpdate}>
                    Guardar cambios
                  </button>
                </div>
              </>
            )}

            {modal.type === "create" && (
              <>
                <h3>➕ Alta de nuevo registro</h3>
                <label>Nombre:</label>
                <input
                  type="text"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  placeholder="Ej: Python"
                />
                <label>Descripción:</label>
                <textarea
                  rows="3"
                  value={formData.descripcion}
                  onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
                  placeholder="Descripción del lenguaje / tecnología"
                />
                <div className="modal-buttons">
                  <button className="btn-cancel" onClick={closeModal}>
                    Cancelar
                  </button>
                  <button className="btn-save" onClick={handleCreate}>
                    Crear registro
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}