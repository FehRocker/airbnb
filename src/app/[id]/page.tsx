import BarraPesquisa from "@/widgets/BarraDePesquisa"
import BarraSuperior from "@/widgets/BarraSuperior"
import Rodape from "@/widgets/Rodape"

interface PageProps{
    id: string
}



export default async function Page (
   {params}:{ params: Promise<PageProps>}
) {
   const dados = await params
    return (
        <>
        <div>
            <header className="container mx-auto max-w-7xl">
                      <BarraSuperior />      
                      <BarraPesquisa />  
                  </header>
                  <hr className="mt-4" />
                  
                  <main className="container mx-auto max-w-7xl">
                   <h1 className="text-3xl pt-6">Chalé das montanhas</h1>
            
                  </main>
                  <footer className="bg-gray-200">
                    <Rodape/>
                  </footer>
        </div>


        </>
    )
}