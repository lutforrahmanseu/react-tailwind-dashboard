import React, { useState } from "react";
import { FiSearch, FiMail, FiStar, FiTrash2, FiEdit, FiX } from "react-icons/fi";

// Dummy data for messages
const initialMessages = [
  { id: 1, sender: "John Doe", email: "john@example.com", subject: "Meeting Reminder", content: "Don't forget about our meeting at 3 PM today.", date: "2023-05-20", isRead: false, isStarred: false },
  { id: 2, sender: "Jane Smith", email: "jane@example.com", subject: "Project Update", content: "I've uploaded the latest project files to our shared drive.", date: "2023-05-19", isRead: true, isStarred: true },
  { id: 3, sender: "Bob Johnson", email: "bob@example.com", subject: "Question about Invoice", content: "I had a question about the invoice you sent last week...", date: "2023-05-18", isRead: true, isStarred: false },
  { id: 4, sender: "Alice Brown", email: "alice@example.com", subject: "New Product Launch", content: "We're excited to announce our new product launch next month.", date: "2023-05-17", isRead: false, isStarred: false },
  { id: 5, sender: "Charlie Davis", email: "charlie@example.com", subject: "Vacation Request", content: "I'd like to request vacation days for next week.", date: "2023-05-16", isRead: true, isStarred: false },
];

export default function Messages() {
  const [messages, setMessages] = useState(initialMessages);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingMessage, setEditingMessage] = useState(null);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredMessages = messages.filter(
    (message) =>
      message.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleRead = (id) => {
    setMessages(
      messages.map((message) =>
        message.id === id ? { ...message, isRead: !message.isRead } : message
      )
    );
  };

  const toggleStarred = (id) => {
    setMessages(
      messages.map((message) =>
        message.id === id ? { ...message, isStarred: !message.isStarred } : message
      )
    );
  };

  const handleDelete = (id) => {
    setMessages(messages.filter((message) => message.id !== id));
  };

  const handleEdit = (message) => {
    setEditingMessage({ ...message });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingMessage(prev => ({ ...prev, [name]: value }));
  };

  const saveEdit = () => {
    setMessages(messages.map(message =>
      message.id === editingMessage.id ? editingMessage : message
    ));
    setEditingMessage(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">Messages</h1>

      <div className="mb-4 flex items-center">
        <FiSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search messages..."
          className="w-full px-3 py-2 border rounded-md"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Sender</th>
              <th className="py-3 px-6 text-left">Subject</th>
              <th className="py-3 px-6 text-left">Preview</th>
              <th className="py-3 px-6 text-center">Date</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {filteredMessages.map((message) => (
              <tr key={message.id} className={`border-b border-gray-200 hover:bg-gray-100 ${message.isRead ? 'bg-gray-50' : ''}`}>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <div className="font-medium">{message.sender}</div>
                  <div className="text-xs text-gray-500">{message.email}</div>
                </td>
                <td className="py-3 px-6 text-left">
                  <div className={`font-medium ${message.isRead ? 'text-gray-600' : 'text-black'}`}>{message.subject}</div>
                </td>
                <td className="py-3 px-6 text-left">
                  <div className="truncate w-64">{message.content}</div>
                </td>
                <td className="py-3 px-6 text-center">
                  {message.date}
                </td>
                <td className="py-3 px-6 text-center">
                  <div className="flex item-center justify-center">
                    <button 
                      className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110"
                      onClick={() => toggleRead(message.id)}
                    >
                      <FiMail className={message.isRead ? 'text-gray-400' : 'text-blue-500'} />
                    </button>
                    <button 
                      className="w-4 mr-2 transform hover:text-yellow-500 hover:scale-110"
                      onClick={() => toggleStarred(message.id)}
                    >
                      <FiStar className={message.isStarred ? 'text-yellow-400' : 'text-gray-400'} />
                    </button>
                    <button 
                      className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                      onClick={() => handleEdit(message)}
                    >
                      <FiEdit />
                    </button>
                    <button 
                      className="w-4 mr-2 transform hover:text-red-500 hover:scale-110"
                      onClick={() => handleDelete(message.id)}
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editingMessage && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Edit Message</h3>
              <div className="mt-2 px-7 py-3">
                <input
                  type="text"
                  name="subject"
                  value={editingMessage.subject}
                  onChange={handleEditChange}
                  className="w-full px-3 py-2 border rounded-md mb-4"
                  placeholder="Subject"
                />
                <textarea
                  name="content"
                  value={editingMessage.content}
                  onChange={handleEditChange}
                  className="w-full px-3 py-2 border rounded-md mb-4"
                  placeholder="Content"
                  rows="4"
                />
              </div>
              <div className="items-center px-4 py-3">
                <button
                  id="ok-btn"
                  className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  onClick={saveEdit}
                >
                  Save Changes
                </button>
              </div>
              <button 
                onClick={() => setEditingMessage(null)}
                className="absolute top-0 right-0 mt-4 mr-4 text-gray-400 hover:text-gray-600"
              >
                <FiX size={24} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
