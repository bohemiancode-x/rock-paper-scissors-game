import Rulesimg from '../assets/images/image-rules.svg'
import Close from '../assets/images/icon-close.svg'

export default function Rules({ toggleModal, modal }) {

  return (
    <div className={modal ? 'modal' : 'hidden'}>
        <div className='flex flex-col items-center text-darktext h-[100vh] pt-20 md:pt-10 w-full md:w-[30%] md:h-[45vh] bg-white p-5 md:rounded-lg'>
            <div className='w-full flex justify-between items-center'>
                <h2 className='text-4xl font-bold m-auto md:m-0'>RULES</h2>
                <img onClick={toggleModal} className='hidden md:block h-5 cursor-pointer ' src={Close} alt="close" />
            </div>

            <div className='mt-20 md:mt-10'>
                <img src={Rulesimg} alt="rules" />
            </div>

            <img onClick={toggleModal} className='md:hidden h-8 md:h-5 cursor-pointer absolute bottom-[4rem] left-[12rem]' src={Close} alt="close" />
        </div>
    </div>
  )
}
