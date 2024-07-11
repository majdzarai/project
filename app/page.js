import Head from "next/head";
import Image from "next/image";
import { BiFoodMenu } from "react-icons/bi";
import Table from "./component/table"

export default function Home() {
  return (
    <section>
      <Head>
        <title>Crud application</title>
      </Head>
      <main className="py-5">
        <h1 className="text-xl md:text-5xl text-center font-bold py-10">cources Management</h1>
        <div className="container mx-auto flex justify-between py-5 border-b">
          <div className="left flex gap-3">
            <button className="flex bg-indigo-300 text-white px-4 py-1 border rounded-md hover:bg-gray-50 hover:border-indigo-500 hover:text-gray-800">
              add cours <span className="px-1"><BiFoodMenu size={(23)} /></span>
            </button>
          </div>


        </div>
        <Table/>
      </main>
    </section>
  );
}
