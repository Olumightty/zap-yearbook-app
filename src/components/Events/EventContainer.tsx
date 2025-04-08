import { ArrowLeft, ArrowLeftCircle, ArrowRightCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

interface EventContainerProps {
    boxColor: string;
    caption: string;
    images?: string[]
    textColor: string
    bgColor: string
    stroke: string
    fill: string
}
const EventContainer = (props: EventContainerProps) => {
  return (
    <section className={`px-20 w-full bg-(${props.bgColor})`}>
        <div className='relative py-30 w-full '>
            <div aria-hidden='true' className={`w-full rounded-4xl h-[254px] bg-(${props.boxColor}) blur-[10px] opacity-80`}/>
            <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                <div className={`relative w-[610px] h-[344px] bg-(${props.boxColor}) rounded-4xl flex items-center custom-shadow`}>
                    <ArrowLeftCircle className='absolute left-2 cursor-pointer' size={40} fill={props.fill} stroke={props.stroke} />
                    <Image width={610} height={344} src={'/api/placeholder/610/344'} alt='convocation'/>
                    <ArrowRightCircle className='absolute right-2 cursor-pointer'  size={40} fill={props.fill} stroke={props.stroke} />
                </div>
            </div>
        </div>
        <p className={`text-(${props.textColor}) text-7xl font-extrabold text-center -mb-3`}>{props.caption}</p>
    </section>
  )
}

export default EventContainer