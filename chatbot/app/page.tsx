"use client";
import Image from "next/image";
import Input from "@/component/inputBar"
import Navbar from "@/component/navbar"
import {useState} from "react"
import Markdown from "react-markdown";

export default function Home() {
  const [response, setResponse] = useState("");
  return (
    <div>
      <main>
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <Markdown>{response !== "" ? response : "Ask me anything!"}</Markdown>
        </div>
        <Input setResponse={setResponse} />
      </main>
    </div>
  );
}
