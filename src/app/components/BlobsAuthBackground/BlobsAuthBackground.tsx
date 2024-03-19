import { BlobFirst } from "@/components/Blobs/BlobFirst"
import { BlobSecond } from "@/components/Blobs/BlobSecond"
import { BlobThird } from "@/components/Blobs/BlobThird"

export const BlobsAuthBackground = () => {
    return (
        <div>
            <BlobFirst fill="#FF7F5D" className="absolute bottom-60 right-20 h-1/4 drop-shadow-[10px_5px_10px_rgba(0,0,0,0.3)]"/>
            <BlobSecond fill="#C2E8E4" className="absolute top-2 left-40 h-1/4 drop-shadow-[10px_5px_10px_rgba(0,0,0,0.3)]" />
            <BlobThird fill="#E94C89" className="absolute bottom-10 left-10 h-1/4 drop-shadow-[10px_5px_10px_rgba(0,0,0,0.3)]" />
        </div>
    )
}
