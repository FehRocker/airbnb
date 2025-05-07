import { IconSearch } from "@tabler/icons-react"

const BarraPesquisa = () =>{
    return (
        <div className="border-2 border-gray-200 rounded-full px-3 flex items-center w-full max-w-2xl mx-auto shadow-lg shadow-gray-500">
            
            <input className="w-full focus:outline-none px-2"
             type="text" placeholder="Pesquise Aqui!" />

           <button className="bg-red-500 rounded-full p-0.5">
            <IconSearch
            aria-label="Icone de pesquisa"
            size={26}
            color="white" />
           </button>
           
        </div>
    )
}

export default BarraPesquisa