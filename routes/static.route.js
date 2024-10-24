import { Router, static as static_ } from "express"
import { pathSeparator, dirnameParse } from '../utilities/path.utils.js'

const { dirname } = import.meta

const separator = pathSeparator()
const _dirname = dirnameParse(dirname, 1)

const router = new Router()

router.use(static_('public'))

router.get('/css', static_(`${_dirname}${separator}public${separator}css`))
router.get('/js', static_(`${_dirname}${separator}public${separator}js`))

export default router