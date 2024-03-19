import React, { FC } from 'react'

interface BlobFirst {
    fill: string,
    className: string
}

export const BlobThird: FC<BlobFirst> = ({
    fill,
    className
}) => {
    return (
        <svg viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path fill={fill} d="M371,269.5Q402,299,394.5,331.5Q387,364,355,374Q323,384,293.5,379.5Q264,375,232.5,417.5Q201,460,171,435.5Q141,411,147,362Q153,313,86.5,316.5Q20,320,71.5,280Q123,240,102,211Q81,182,90,152Q99,122,139.5,129Q180,136,191.5,82Q203,28,239.5,30.5Q276,33,287,86.5Q298,140,338.5,131.5Q379,123,397,149.5Q415,176,377.5,208Q340,240,371,269.5Z" />
        </svg>

    )
}