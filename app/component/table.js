import { BiEdit,BiTrashAlt } from "react-icons/bi";
export default function Table() {
    return (
      <table className="min-w-full table-auto border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-400">
            <th className="px-4 py-2 border border-gray-300">
              <span className="text-gray-200">Teacher Name</span>
            </th>
            <th className="px-4 py-2 border border-gray-300">
              <span className="text-gray-200">Section</span>
            </th>
            <th className="px-4 py-2 border border-gray-300">
              <span className="text-gray-200">Cours Name</span>
            </th>
            <th className="px-4 py-2 border border-gray-300">
              <span className="text-gray-200">Price</span>
            </th>
            <th className="px-4 py-2 border border-gray-300">
              <span className="text-gray-200">Description</span>
            </th>
            <th className="px-4 py-2 border border-gray-300">
              <span className="text-gray-200">Image</span>
            </th>
            <th className="px-4 py-2 border border-gray-300">
              <span className="text-gray-200">Status</span>
            </th>
            <th className="px-4 py-2 border border-gray-300">
              <span className="text-gray-200">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-200">
          <tr className="bg-gray-300 text-center">
            <td className="px-4 py-2 border border-gray-300 flex flex-row items-center justify-center">
              <img src="#" alt="/" className="w-8 h-8 rounded-full" />
              <span className="text-center ml-2 font-semibold">Majd Zarai</span>
            </td>
            <td className="px-4 py-2 border border-gray-300">
              <span>4eme technique</span>
            </td>
            <td className="px-4 py-2 border border-gray-300">
              <span>Mathematique</span>
            </td>
            <td className="px-4 py-2 border border-gray-300">
              <span>40 TND</span>
            </td>
            <td className="px-4 py-2 border border-gray-300">
              <span>description du cours</span>
            </td>
            <td className="px-4 py-2 border border-gray-300">
              <span></span>
            </td>
            <td className="px-16 py-2 ">
              <button className="cursor">
                <span className="bg-green-500 text-white px-5 py-1 rounded">Publier</span>
              </button>
            </td>
            <td className="px-16 py-2 flex justify-around gap-5">
              <button className="cursor">
                <BiEdit size={25} color="8DAFFF" />
                
              </button>
              <button className="cursor"><BiTrashAlt size={25} color="FF7979"/></button>
            </td>
            
          </tr>
        </tbody>
      </table>
    );
  }
  