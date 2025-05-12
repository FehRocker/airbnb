import Acomodacoes from "@/widgets/Acomodacoes";
import BarraPesquisa from "@/widgets/BarraDePesquisa";
import BarraSuperior from "@/widgets/BarraSuperior";
import NavegacaoAbasHorizontal from "@/widgets/NavegacaoAbasHorizontal";



export default function Home() {
  return (
    <>
      <header className="container mx-auto max-w-7xl">
          <BarraSuperior />      
          <BarraPesquisa />  
      </header>
      <hr className="mt-4" />
      
      <main className="container mx-auto max-w-7xl">
        <NavegacaoAbasHorizontal/>
        <Acomodacoes/>

      </main>
      <footer className="container mx-auto max-w-7xl">
        Rodapé

      </footer>
    </>
  );
}
