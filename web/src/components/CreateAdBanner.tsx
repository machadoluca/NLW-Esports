import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog'

export function CreateAdBanner() {
    return (
        <div className='pt-1 bg-nlw-gradient self-stretch mt-8 rounded-lg overflow-hidden'>
        <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
          <div>
            <strong className='text-white text-2xl font-black block'>Não encontrou o seu duo?</strong>
            <span className='text-zinc-400 block'>Publique um anúncio para encontrar novos players!</span>
          </div>

          <Dialog.Trigger className='rounded-md bg-violet-500 px-3 py-4 hover:bg-violet-600 text-white flex items-center gap-3'>
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </Dialog.Trigger>
        </div>
        </div>
    )
}