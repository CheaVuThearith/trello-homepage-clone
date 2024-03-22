import React from 'react'
import TitleCard from '../TitleCard'
//
//
//
type Props = {
    children:React.ReactNode
    title:string
    className?:string
}
//
//
//
const DropDownRight = ({children, title, className}: Props) => {
  return (
<TitleCard
classList="w-[285px]"
className={`border-[#998dd9] ${className}`}
title={title}
>
{children}
</TitleCard>  )
}

export default DropDownRight