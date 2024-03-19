import React, { FC } from 'react'

interface BlobFirst {
    fill: string,
    className: string
}

export const BlobSecond: FC<BlobFirst> = ({
    fill,
    className
}) => {
    return (
        <svg viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" className={className} >
            <path fill={fill} d="M407,269.5Q352,299,339,332Q326,365,295.5,405.5Q265,446,210,454.5Q155,463,159,386Q163,309,130,292Q97,275,63,231.5Q29,188,82,167.5Q135,147,150,95Q165,43,210.5,74Q256,105,304,91.5Q352,78,375,117.5Q398,157,430,198.5Q462,240,407,269.5Z" />
        </svg>
    )
}