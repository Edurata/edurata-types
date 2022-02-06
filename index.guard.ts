/*
 * Generated type guards for "index.d.ts".
 * WARNING: Do not manually change this file.
 */
import { FileStr, File, TypescriptFile, OasFile, HttpsString, DomainEnding, UrlString } from "./index";

export function isFileStr(obj: any, _argumentName?: string): obj is FileStr {
    return (
        typeof obj === "`file:${string}`"
    )
}

export function isFile(obj: any, _argumentName?: string): obj is File {
    return (
        (typeof obj === "string" ||
            isFileStr(obj) as boolean ||
            (obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
            typeof obj.path === "string" &&
            typeof obj.fileName === "string" &&
            typeof obj.fileType === "string")
    )
}

export function isTypescriptFile(obj: any, _argumentName?: string): obj is TypescriptFile {
    return (
        (typeof obj === "string" &&
            (obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
            obj.fileType === "ts" ||
            isFileStr(obj) as boolean &&
            (obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
            obj.fileType === "ts" ||
            (obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
            typeof obj.path === "string" &&
            typeof obj.fileName === "string" &&
            typeof obj.fileType === "string" &&
            (obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
            obj.fileType === "ts")
    )
}

export function isOasFile(obj: any, _argumentName?: string): obj is OasFile {
    return (
        (typeof obj === "string" &&
            (obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
            (obj.fileType === "yaml" ||
                obj.fileType === "yml" ||
                obj.fileType === "json") ||
            isFileStr(obj) as boolean &&
            (obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
            (obj.fileType === "yaml" ||
                obj.fileType === "yml" ||
                obj.fileType === "json") ||
            (obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
            typeof obj.path === "string" &&
            typeof obj.fileName === "string" &&
            typeof obj.fileType === "string" &&
            (obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
            (obj.fileType === "yaml" ||
                obj.fileType === "yml" ||
                obj.fileType === "json"))
    )
}

export function isHttpsString(obj: any, _argumentName?: string): obj is HttpsString {
    return (
        obj === "https://"
    )
}

export function isDomainEnding(obj: any, _argumentName?: string): obj is DomainEnding {
    return (
        null
    )
}

export function isUrlString(obj: any, _argumentName?: string): obj is UrlString {
    return (
        typeof obj === "`https://${string}.${any}`"
    )
}
