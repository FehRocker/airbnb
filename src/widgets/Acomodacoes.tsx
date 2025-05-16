import Acomodacao from "@/components/acomodacao"
import { Accommodation } from "@/types/AirbnbDados"
import Image from "next/image"
import Link from "next/link"



interface AcomodacoesProps{
  accommodation: Accommodation[]
}

const Acomodacoes = (
  props:AcomodacoesProps
) =>{
  const acomodacoes = props.accommodation
    return(
       <section className="py-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {acomodacoes.map ((acomodacao, indice) => (
            <div key={indice}>
                <Link href={acomodacao.slug}>
                  <Acomodacao
                local={acomodacao.location.description}
                anfitriao={acomodacao.host}
                data={acomodacao.date}
                preco={acomodacao.price}
                avaliacao={acomodacao.rating}
                preferidoHospedes={acomodacao.hasBadge}
                >
                  <Image className="w-full aspect-square object-cover rounded-lg"
                    src={acomodacao.photos[0].source}
                    alt={acomodacao.photos[0].description}
                    width={300}
                    height={300}
                />
                </Acomodacao>
                </Link>
            </div>
        ))}
       </section>
    )
}

export default Acomodacoes