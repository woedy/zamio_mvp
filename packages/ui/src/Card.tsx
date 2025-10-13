import React from 'react'

export default function Card({children, className=''}: any){
  return <div className={'p-4 rounded-xl shadow-sm bg-white dark:bg-gray-800 ' + className}>{children}</div>
}