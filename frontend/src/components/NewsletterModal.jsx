// src/components/NewsletterModal.js
import { useState } from "react";

const NewsletterModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="fixed bottom-6 right-6 bg-orange-500 text-white p-4 rounded-full shadow-lg">
        Subscribe
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-96">
            <h2 className="text-2xl font-semibold">Subscribe to Our Newsletter</h2>
            <p className="text-gray-500">Stay updated with the latest trends.</p>
            <input type="email" placeholder="Enter your email" className="border border-gray-300 p-2 w-full mt-4" />
            <button className="bg-black text-white p-2 w-full mt-4" onClick={() => setIsOpen(false)}>Submit</button>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsletterModal;
