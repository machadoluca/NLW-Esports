interface GameBannerProps {
  bannerurl: string;
  title: string;
  adscount: number;
}

export function GameBanner(props: GameBannerProps) {
    return (
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src={props.bannerurl} alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='text-white font-bold block'>{props.title}</strong>
            <span className='text-zinc-300 text-sm block'>{props.adscount} anúncio(s)</span>
          </div>
        </a>
    )    
}