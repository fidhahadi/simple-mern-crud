import React, { useState } from "react";

const CrudComponent = () => {
  const initialData = [
    { id: 1, name: "John Doe", email: "john@example.com", dob: "1990-01-01" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", dob: "1985-05-15" },
  ];

  const [items, setItems] = useState(initialData);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleEdit = (id) => {
    const itemToEdit = items.find((item) => item.id === id);
    setSelectedItem(itemToEdit);
  };

  const handleUpdate = (updatedItem) => {
    setItems(
      items.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
    setSelectedItem(null);
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
    setSelectedItem(null);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">CRUD Component</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Date of Birth</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td className="border px-4 py-2">{item.id}</td>
              <td className="border px-4 py-2">
                {item === selectedItem ? (
                  <input
                    type="text"
                    className="border rounded p-1"
                    value={selectedItem.name}
                    onChange={(e) =>
                      setSelectedItem({ ...selectedItem, name: e.target.value })
                    }
                  />
                ) : (
                  item.name
                )}
              </td>
              <td className="border px-4 py-2">
                {item === selectedItem ? (
                  <input
                    type="text"
                    className="border rounded p-1"
                    value={selectedItem.email}
                    onChange={(e) =>
                      setSelectedItem({
                        ...selectedItem,
                        email: e.target.value,
                      })
                    }
                  />
                ) : (
                  item.email
                )}
              </td>
              <td className="border px-4 py-2">
                {item === selectedItem ? (
                  <input
                    type="text"
                    className="border rounded p-1"
                    value={selectedItem.dob}
                    onChange={(e) =>
                      setSelectedItem({ ...selectedItem, dob: e.target.value })
                    }
                  />
                ) : (
                  item.dob
                )}
              </td>
              <td className="border px-4 py-2">
                {item === selectedItem ? (
                  <div>
                    <button
                      className="text-blue-500 hover:text-blue-700 mr-2"
                      onClick={() => handleUpdate(selectedItem)}
                    >
                      Save
                    </button>
                    <button
                      className="text-gray-500 hover:text-gray-700"
                      onClick={() => setSelectedItem(null)}
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div>
                    <button
                      className="text-blue-500 hover:text-blue-700 mr-2"
                      onClick={() => handleEdit(item.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CrudComponent;
