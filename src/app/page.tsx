import BarraPesquisa from "@/widgets/BarraDePesquisa";
import BarraSuperior from "@/widgets/BarraSuperior";



export default function Home() {
  return (
    <>
      <div>
          <BarraSuperior />      
          <BarraPesquisa />  
      </div>
      <hr className="mt-4" />
      <div className="border-green-600 border-2">Área Conteúdos</div>
      <div className="border-purple-600 border-2">Rodapé</div>
    </>
  );
}
