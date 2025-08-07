"use client";

import { useState } from "react";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface University {
  name: string;
  cost: string;
  deadline: string;
  applyLink: string;
  description: string;
  country: string;
  city: string;
  courseDuration: string;
  intakeMonths: string;
  requirements: string;
  ranking: string;
  scholarshipAvailable: string;
  languageOfInstruction: string;
  website: string;
  contactEmail: string;
}

export default function Home() {
  const [page, setPage] = useState<"chat" | "finder">("chat");

  // Chat states
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [chatInput, setChatInput] = useState("");
  const [isLoadingChat, setIsLoadingChat] = useState(false);

  // Search states
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<University[]>([]);
  const [isLoadingSearch, setIsLoadingSearch] = useState(false);

  const [error, setError] = useState<string | null>(null);

  async function handleChatSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMessage: ChatMessage = { role: "user", content: chatInput };
    const updatedHistory = [...chatHistory, userMessage];
    setChatHistory(updatedHistory);
    setChatInput("");
    setIsLoadingChat(true);
    setError(null);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedHistory }),
      });

      if (!res.ok) throw new Error(`Error: ${res.status}`);

      const data = await res.json();

      if (data.result?.content) {
        setChatHistory((prev) => [...prev, { role: "assistant", content: data.result.content }]);
      } else {
        throw new Error("No response from AI");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to get AI response. Please try again.");
    } finally {
      setIsLoadingChat(false);
    }
  }

  async function handleSearchSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsLoadingSearch(true);
    setError(null);
    setSearchResults([]);

    try {
      const res = await fetch("/api/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: searchQuery }),
      });

      if (!res.ok) throw new Error(`Error: ${res.status}`);

      const data = await res.json();

      if (Array.isArray(data.results)) {
        setSearchResults(data.results);
      } else {
        throw new Error("Invalid data format from AI");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to get search results. Try refining your query.");
    } finally {
      setIsLoadingSearch(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-3xl flex flex-col h-[80vh]">
        {/* Navigation */}
        <nav className="flex space-x-4 mb-6">
          <button
            className={`px-4 py-2 rounded-full font-semibold transition ${
              page === "chat" ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => {
              setPage("chat");
              setError(null);
            }}
          >
            AI Chat Assistant
          </button>
          <button
            className={`px-4 py-2 rounded-full font-semibold transition ${
              page === "finder" ? "bg-green-600 text-white" : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => {
              setPage("finder");
              setError(null);
            }}
          >
            AI University Finder
          </button>
        </nav>

        {/* Chat Page */}
        {page === "chat" && (
          <section className="flex flex-col flex-1 mt-2 overflow-hidden">
            <div className="flex-1 overflow-y-auto p-4 space-y-4 border rounded-md bg-gray-50">
              {chatHistory.length === 0 && <p className="text-center text-gray-500">Find Your universities based on the following query:
                should have name, cost, deadline, applyLink, and description fields. etc</p>}

              {chatHistory.map((msg, i) => (
                <div
                  key={i}
                  className={`max-w-[70%] p-3 rounded-2xl ${
                    msg.role === "user" ? "bg-blue-600 text-white self-end rounded-br-none" : "bg-white text-gray-900 rounded-bl-none"
                  }`}
                >
                  {msg.content.split("\n").map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              ))}

              {isLoadingChat && <p className="text-gray-500 animate-pulse">AI is thinking...</p>}
            </div>
            {error && <p className="text-red-600 text-center mt-2">{error}</p>}
            <form onSubmit={handleChatSubmit} className="flex mt-4 space-x-2">
              <input
                type="text"
                className="flex-grow p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your message..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                disabled={isLoadingChat}
              />
              <button
                type="submit"
                disabled={isLoadingChat}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-4 rounded-full font-semibold"
              >
                Send
              </button>
            </form>
          </section>
        )}

        {/* Finder Page */}
        {page === "finder" && (
          <section className="flex flex-col flex-1 overflow-hidden">
            <form onSubmit={handleSearchSubmit} className="flex space-x-2 mb-4">
              <input
                type="text"
                className="flex-grow p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Find universities (e.g. affordable CS courses in Germany)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                disabled={isLoadingSearch}
              />
              <button
                type="submit"
                disabled={isLoadingSearch}
                className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-4 rounded-full font-semibold"
              >
                Search
              </button>
            </form>
            {error && <p className="text-red-600 text-center mb-2">{error}</p>}

            <div className="overflow-y-auto flex-1 space-y-4">
              {isLoadingSearch && <p className="text-gray-500 animate-pulse text-center">Searching...</p>}

              {!isLoadingSearch && searchResults.length === 0 && !error && (
                <p className="text-center text-gray-500">Your search results will appear here.</p>
              )}

              {searchResults.map((uni, i) => (
                <div
                  key={i}
                  className="bg-white p-4 rounded-lg shadow-md border border-gray-300"
                >
                  <h3 className="text-xl font-semibold text-gray-900">
                    {uni.name} - {uni.city}, {uni.country}
                  </h3>
                  <p className="mt-1 text-gray-700">{uni.description}</p>
                  <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-600">
                    <span><strong>Cost:</strong> {uni.cost}</span>
                    <span><strong>Deadline:</strong> {uni.deadline}</span>
                    <span><strong>Duration:</strong> {uni.courseDuration}</span>
                    <span><strong>Intakes:</strong> {uni.intakeMonths}</span>
                    <span><strong>Ranking:</strong> {uni.ranking}</span>
                    <span><strong>Language:</strong> {uni.languageOfInstruction}</span>
                    <span><strong>Scholarship:</strong> {uni.scholarshipAvailable}</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-500"><strong>Requirements:</strong> {uni.requirements}</p>
                  <div className="mt-3 flex flex-col space-y-1 text-sm">
                    {uni.website && (
                      <a href={uni.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                        Official Website
                      </a>
                    )}
                    {uni.contactEmail && <span>Contact: {uni.contactEmail}</span>}
                  </div>
                  {uni.applyLink && (
                    <a
                      href={uni.applyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700"
                    >
                      Apply Now
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
