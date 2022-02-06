// type FileStr = `file:${string}`
type FileStr = string

export type File = {
    path: string // e.g. /path/to/file/
    fileName: string
    fileType: string
} // TODO this is temporary until strin interpolation at auto guard is fixed

export type TypescriptFile = File & {
    fileType: "ts"
}

export type OasFile = File & {
    fileType: "yaml" | "yml" | "json"
}
