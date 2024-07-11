"use client"; // Add this line at the top

import Head from "next/head";
import { useState } from "react";
import { BiFoodMenu } from "react-icons/bi";
import Table from "./component/table";
import Form from "./component/form";

export default function Home() {
  const [isFormVisible, setFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
  };

  return (
    <section>
      <Head>
        <title>Crud Application</title>
      </Head>
      <main className="py-5">
        <h1 className="text-xl md:text-5xl text-center font-bold py-10">Courses Management</h1>
        <div className="container mx-auto flex justify-between py-5 border-b">
          <div className="left flex gap-3">
            <button 
              className="flex bg-indigo-300 text-white px-4 py-1 border rounded-md hover:bg-gray-50 hover:border-indigo-500 hover:text-gray-800"
              onClick={toggleFormVisibility}
            >
              Add Course <span className="px-1"><BiFoodMenu size={23} /></span>
            </button>
          </div>
        </div>
        {isFormVisible && (
          <div className="container mx-auto my-5">
            <Form />
          </div>
        )}
        <div className="container mx-auto my-5">
          <Table />
        </div>
      </main>
    </section>
  );
}
