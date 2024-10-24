import { resolve } from 'node:path'
import { pathSeparator, dirnameParse } from '../utilities/path.utils.js'

const { dirname } = import.meta

async function buildHome(req, res) {
    const separator = pathSeparator()

    return res.sendFile(resolve(`${dirnameParse(dirname, 1)}${separator}views${separator}index.html`))
}

export { buildHome }