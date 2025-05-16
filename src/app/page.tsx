import { fetchData } from "@/utils/api";
import Acomodacoes from "@/widgets/Acomodacoes";
import BarraPesquisa from "@/widgets/BarraDePesquisa";
import BarraSuperior from "@/widgets/BarraSuperior";
import NavegacaoAbasHorizontal from "@/widgets/NavegacaoAbasHorizontal";
import Rodape from "@/widgets/Rodape";



export default async function Home() {

  const dados = await fetchData()


  return (
    <>
    {dados.accommodation[10].title}
      <header className="container mx-auto max-w-7xl">
          <BarraSuperior />      
          <BarraPesquisa />  
      </header>
      <hr className="mt-4" />
      
      <main className="container mx-auto max-w-7xl">
        <NavegacaoAbasHorizontal/>
        <Acomodacoes/>

      </main>
      <footer className="bg-gray-200">
        <Rodape/>
      </footer>
    </>
  );
}
