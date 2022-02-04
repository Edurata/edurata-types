export type ArtefactFile = {
    _str: string // file:/path/to/file/filename.ts
    path: string // e.g. /path/to/file/
    filename: string
    fileType: string
}

export type TypescriptFile = ArtefactFile & {
    fileType: "ts"
}