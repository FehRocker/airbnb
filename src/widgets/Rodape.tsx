import Link from "next/link"

const Rodape = () =>{
    return (
        <div className="container mx-auto px-20 py-6">
            <span className="text-lg font-semibold">&copy; AinrBnb INC</span>
            <ul className="flex gap-2">
                <li>
                    <Link className="hover:text-red-500" href="/">Privacidade</Link>
                </li>
                <li>
                    &middot;
                </li>
                <li>
                    <Link className="hover:text-red-500" href="/">Termos</Link>
                </li>
                 <li>
                    &middot;
                </li>
                <li>
                    <Link className="hover:text-red-500" href="/">Mapa do Site</Link>
                </li>
                 <li>
                    &middot;
                </li>
                <li>
                    <Link className="hover:text-red-500" href="/">Informações da Empresa</Link>
                </li>
                 <li>
                    &middot;
                </li>
                <li>
                    <Link className="hover:text-red-500" href="/">Desenvolvido por Fernando Santana</Link>
                </li>
            </ul>
        </div>
    )
}

export default Rodape