import { fetchDataById } from "@/utils/api"
import AcomodacaoDepoimentos from "@/widgets/AcomodacaoDepoimentos"
import AcomodacaoDetalhes from "@/widgets/AcomodacaoDetalhes"
import BarraPesquisa from "@/widgets/BarraDePesquisa"
import BarraSuperior from "@/widgets/BarraSuperior"
import Galeria from "@/widgets/Galeria"
import Rodape from "@/widgets/Rodape"
import { notFound } from "next/navigation"

interface PageProps{
    id: string
}



export default async function Page (
   {params}:{ params: Promise<PageProps>}
) {
   const {id} = await params
   const acomodacao = await fetchDataById(id)

    if (! acomodacao) {
      notFound()
    }

    return (
        <>
        <div>
            <header className="container mx-auto max-w-7xl">
                      <BarraSuperior />      
                      <BarraPesquisa />  
                  </header>
                  <hr className="mt-4" />
                  
                  <main className="container mx-auto max-w-7xl">
                   
                   <h1 className="text-3xl pt-6">{acomodacao.title}</h1>
                   <Galeria fotos={acomodacao.photos} />

                   <div className="flex flex-col md:flex-row">
                    <AcomodacaoDetalhes accommodation={acomodacao}/>
                    <AcomodacaoDepoimentos/>
                   </div>
            
                  </main>

                  <footer className="bg-gray-200">
                    <Rodape/>
                  </footer>
        </div>


        </>
    )
}