export interface Content {
    loading: boolean
}

export interface KeyValue {
    [keyN: string | number] : string;
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
    title?: string | undefined,
    article?: string | undefined,
    id?: string | undefined,
    image?: string | undefined
}[]

export interface SelectedBlog {
    title?: string | undefined,
    article?: string | undefined,
    id?: string | undefined,
    image?: string | undefined,
}

type NumberSlug = {
    n: number;
}

export type BlogContextType = {
    blogData: BlogData["blogData"] | undefined;
    setBlogData: (blogData: BlogData["blogData"] | undefined) => void;
    numberSlug?: number;
    updateBlogs?: (blogData: BlogData["blogData"] | undefined) => void;
}