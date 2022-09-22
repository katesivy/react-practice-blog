export interface Content {
    loading: boolean
}

export interface BlogData {
    blogData: {
        title?: string,
        article?: string,
        id?: string,
        image?: string
    }[]
}

// export interface DataArray {
//     // title?: string,
//     // article?: string,
//     // id?: string,
//     // image?: string
//     blogData: {}
// }[]

export interface BlogArray {
    title: string,
    article: string,
    id: string,
    image: string
}[]

export type BlogContextType = {
    blogData: {
        title?: string,
        article?: string,
        id?: string,
        image?: string
    }[]
  };