import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Sidebar } from "../";
import { Select } from "../";

export default function App() {
  return (
    <div>
      This is here for you to be able to test components during development. For
      example:

      <BrowserRouter>
      <div className="flex">
        <Sidebar collapsed={false} />
        <div className="ml-16 w-full p-4">
          <Routes>
            <Route path="/home" element={<div>Home Page</div>} />
            <Route path="/inventory" element={<div>Inventory Page</div>} />
            <Route path="/cwm" element={<div>Issues Page</div>} />
            <Route path="/elog" element={<div>eLogs Page</div>} />
            <Route path="/815" element={<div>8:15 Page</div>} />
            <Route path="/admin/generalAdmin" element={<div>Admin Page</div>} />
            <Route path="/settings" element={<div>Settings Page</div>} />
            <Route path="/" element={<div>Welcome! Select a page from the sidebar.</div>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>

    
      <Select
        onSearchChange={() => { }}
        options={["Option 1", "Option 2", "Option 3"]}
        placeholder="Select an option"
        setValue={() => { }}
        value={null}
      />
    </div>
  );
}
