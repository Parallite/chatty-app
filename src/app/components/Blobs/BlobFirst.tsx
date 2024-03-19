import React, { FC } from 'react'

interface BlobFirst {
    fill: string,
    className: string
}

export const BlobFirst: FC<BlobFirst> = ({
    fill,
    className
}) => {
    return (
        <svg viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" className={className} >
            <path fill={fill} d="M390,256Q339,272,376,319Q413,366,360.5,350Q308,334,302,373Q296,412,268,389.5Q240,367,219.5,366Q199,365,149.5,399Q100,433,100.5,387Q101,341,100,313.5Q99,286,90,263Q81,240,101.5,221Q122,202,86,152Q50,102,84,87Q118,72,159.5,95.5Q201,119,220.5,122.5Q240,126,261,118.5Q282,111,294,130Q306,149,317.5,162Q329,175,362.5,182Q396,189,418.5,214.5Q441,240,390,256Z" />
        </svg>
    )
}