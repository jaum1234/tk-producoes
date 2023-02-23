import { StaticImageData } from "next/image"

export type Channel = {
    id: number | string,
    name: string,
    statistics: {
        views: number,
        subs: number
    },
    thumbnails: {
        url: StaticImageData
    }
}
