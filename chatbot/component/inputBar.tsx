"use client";
import { useState } from "react";
import { generateText } from"@/app/actions/geminiActions";

export default function InputBar({setResponse}: {setResponse: (response: string) => void}) {
    const [input, setInput] = useState("");
    
    const handleSend = async () => {
        const result = await generateText(input);
        setInput("");
        setResponse(result || "No response received.");
    };

    return (
        <div className="flex items-center mt-150 justify-center gap-2 p-4">
            <input 
            className="border border-gray-300 rounded p-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text" 
                placeholder="Ask me anything..." 
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600" onClick={handleSend}>
                Send
            </button>
        </div>
    )
}