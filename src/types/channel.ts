import { StaticImageData } from "next/image"

export type Channel = {
    id: number | string,
    name: string,
    customUrl: string,
    statistics: {
        views: number,
        subs: number
    },
    thumbnails: {
        url: StaticImageData
    }
}
