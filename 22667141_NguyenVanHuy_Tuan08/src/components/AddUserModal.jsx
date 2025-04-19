import React from "react";

const AddUserModal = ({ user, onClose, onChange, onSave }) => {
  return (
    <div className="fixed inset-0 bg-pink-50 bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-md w-[400px] shadow-lg relative">
        <h3 className="text-lg font-bold mb-4">Add New User</h3>

        <div className="mb-3">
          <label className="text-sm font-medium">Name</label>
          <input
            value={user.name}
            onChange={(e) => onChange({ ...user, name: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>

        <div className="mb-3">
          <label className="text-sm font-medium">Company</label>
          <input
            value={user.company}
            onChange={(e) => onChange({ ...user, company: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>

        <div className="mb-3">
          <label className="text-sm font-medium">Order Value</label>
          <input
            value={user.value}
            onChange={(e) => onChange({ ...user, value: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>

        <div className="mb-3">
          <label className="text-sm font-medium">Order Date</label>
          <input
            type="date"
            value={user.date}
            onChange={(e) => onChange({ ...user, date: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>

        <div className="mb-3">
          <label className="text-sm font-medium">Status</label>
          <select
            value={user.status}
            onChange={(e) => onChange({ ...user, status: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          >
            <option value="New">New</option>
            <option value="In-progress">In-progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="text-sm font-medium">Avatar URL</label>
          <input
            value={user.avatar}
            onChange={(e) => onChange({ ...user, avatar: e.target.value })}
            placeholder="Dán link ảnh ở đây"
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
          >
            Add User
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUserModal;
