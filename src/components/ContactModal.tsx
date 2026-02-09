"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { X, Loader2, CheckCircle, AlertCircle } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const t = useTranslations("Contact");
  
  // States for handling the form submission
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    
  
    formData.append("access_key", "0dcce766-105d-4a0a-a6c2-1b6171325a00"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        // Optional: Reset form or close modal after delay if needed
      } else {
        setErrorMessage("Something went wrong. Please try again later.");
      }
    } catch (error) {
      setErrorMessage("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden relative animate-in fade-in zoom-in duration-300">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black transition z-10"
        >
          <X size={24} />
        </button>

        <div className="p-8">
          {isSuccess ? (
            /* SUCCESS STATE */
            <div className="flex flex-col items-center justify-center text-center py-10 space-y-4">
              <div className="bg-green-100 p-4 rounded-full">
                <CheckCircle size={48} className="text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Message Sent!</h2>
              <p className="text-gray-600">
                Thank you for contacting us. We will get back to you shortly.
              </p>
              <button 
                onClick={onClose}
                className="mt-6 bg-gray-900 text-white font-medium px-6 py-2 rounded-lg hover:bg-gray-800 transition"
              >
                Close
              </button>
            </div>
          ) : (
            /* FORM STATE */
            <>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{t("title")}</h2>
              <p className="text-gray-600 mb-6">{t("subtitle")}</p>

              <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Honeypot for bots (hidden) */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">{t("name")}</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name"
                    required
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none transition" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">{t("email")}</label>
                  <input 
                    type="email" 
                    name="email"
                    id="email"
                    required
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none transition" 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">{t("message")}</label>
                  <textarea 
                    name="message"
                    id="message"
                    rows={4} 
                    required
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none transition"
                  ></textarea>
                </div>

                {errorMessage && (
                  <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-2 rounded-lg">
                    <AlertCircle size={16} />
                    <span>{errorMessage}</span>
                  </div>
                )}
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    t("send")
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}