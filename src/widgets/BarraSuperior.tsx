import Logo from "@/components/logo/logo";
import Link from "next/link";

const BarraSuperior = () => {
  return (
    <>
      <div className="max-w-7xl py-6 container mx-auto flex justify-between items-center">
        <Logo />

        <div className="flex gap-6">
          <Link className="font-semibold" href={"/"}>
            Acomodações
          </Link>
          <Link className="opacity-60" href={"/"}>
            Experiências
          </Link>
        </div>

        <button className="rounded-md border-2">Entrar</button>
      </div>
    </>
  );
};

export default BarraSuperior;
