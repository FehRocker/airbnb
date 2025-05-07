interface BotaoIconeProps{
    icone:React.ReactNode //possibilita o uso de qualquer tipo de icone
    children:React.ReactNode
}


const BotaoIcone = (props:BotaoIconeProps) => {
  return (
    <>
    <button className="rounded-xl border-2 flex items-center
                        gap-2 px-2  hover:border-gray-400">
        <span>{props.icone}</span>
        <span>{props.children}</span>
    </button>
    </>
  );
};

export default BotaoIcone;
