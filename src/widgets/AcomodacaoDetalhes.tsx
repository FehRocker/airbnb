import{
     IconPhoto,
    IconToolsKitchen2,
    IconDesk,
    IconPool,
    IconBrandCarbon,
    IconSailboat,
    IconWifi,
    IconParking,
    IconAlarmSmoke,
    IconDog,
} from '@/assets/icones'
import { Accommodation } from '@/types/AirbnbDados'

interface AcomodacaoDetalhesProps{
    accommodation: Accommodation
}

const AcomodacaoDetalhes = (
    props:AcomodacaoDetalhesProps
) => {

    const acomodacao = props.accommodation

  return (

    <div className="w-full py-4">
        <h3 className="text-xl font-semibold">{acomodacao.location.description}</h3>
        <ul className="flex gap-2">
          <li>10 Hóspedes</li>
          <li>&middot;</li>
          <li>5 Quartos</li>
          <li>&middot;</li>
          <li>5 Camas</li>
          <li>&middot;</li>
          <li>2 Banheiros</li>
        </ul>

         <h3 className="py-6">O quê esse lugar oferece?</h3>

         <ul className='py-2 grid grid-cols-2 gap-3'>
            <li className='flex gap-1.5'>
                <IconPhoto/>
                <span>Vista para as montanhas</span>
            </li>
            <li className='flex gap-1.5'>
                <IconToolsKitchen2/>
                <span>Cozinha</span>
            </li>
            <li className='flex gap-1.5'>
                <IconDesk/>
                <span>Espaço para Home-office</span>
            </li>
            <li className='flex gap-1.5'>
                <IconPool/>
                <span>Piscina</span>
            </li>
            <li className='flex gap-1.5'>
                <IconBrandCarbon/>
                <span>Alarme de segurança p/ gás</span>
            </li>
            <li className='flex gap-1.5'>
                <IconSailboat/>
                <span>Passeio de barco</span>
            </li>
            <li className='flex gap-1.5'>
                <IconWifi/>
                <span>Wifi</span>
            </li>
            <li className='flex gap-1.5'>
                <IconParking/>
                <span>Garagem</span>
            </li>
            <li className='flex gap-1.5'>
                <IconAlarmSmoke/>
                <span>Detector de fumaça</span>
            </li>
            <li className='flex gap-1.5'>
                <IconDog/>
                <span>Aceita animais</span>
            </li>
         </ul>

    </div>
  )
}


export default AcomodacaoDetalhes
