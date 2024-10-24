const { NODE_ENV } = process.env

function pathSeparator() {
    return NODE_ENV === 'development' ? '\\' : '/'
}

function dirnameParse(dirname, subfoldersNum) {
    const separator = pathSeparator()

    return dirname.split(separator).filter((_, i, arr) => i !== arr.length - subfoldersNum).join(separator)
}

export { pathSeparator, dirnameParse }