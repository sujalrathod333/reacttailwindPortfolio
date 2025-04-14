// App.jsx
import React from "react";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm text-center">
        <img
          className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
          src="\src\assets\mypic.jpeg"
          alt="Profile"
        />
        <h1 className="text-2xl font-semibold text-gray-800">Sujal rathod</h1>
        <p className="text-gray-600 mt-2">
          Frontend developer with a passion for clean UI and thoughtful user experience.  
          Constantly exploring new web tech and pushing pixels with purpose.
        </p>
        <h2 className="mt-6 text-lg font-medium text-gray-700">Hobbies</h2>
        <ul className="mt-2 text-gray-600">
          <li>Learning coding Language</li>
          <li>Reading Article About Technology</li>
          <li>Listening Music</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
