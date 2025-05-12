import { IconHeart, IconStarFilled } from "@/assets/icones"

interface Acomodacaoprops{
    children: React.ReactNode
    local:string
    anfitriao:string
    data:string
    preco:number
    avaliacao:number
    preferidoHospedes:boolean
}


const Acomodacao = ({
    children, local, anfitriao, data, preco, avaliacao, preferidoHospedes
}:Acomodacaoprops) =>{
    return(
        // colocar posição relativa para poder colocar posição absoluta na div
        <figure className="relative"> 
            <div className="p-2 absolute w-full flex justify-between items-center">
                <span className="bg-white rounded-full px-2">Preferido dos Hóspedes</span>
                <IconHeart
            aria-label="Icone de favorito"
            size={26}
            color="black" />
            </div>


            {children}

            <figcaption>
                <div className="flex justify-between items-center font-semibold">
                    <span>{local}</span>
                    <div className="flex gap-0.5 items-center">
                        <IconStarFilled
                            aria-label="Icone de avaliação"
                            size={18}/>
                            <span>{avaliacao}</span>
                    </div>
                </div>
                <div>Anfitriã(o): {anfitriao}</div>
                <div>{data}</div>
                <div className="font-semibold">R$ {preco}</div>
            </figcaption>
        </figure>
    )
}

export default Acomodacao