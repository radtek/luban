import dropdown from './dropdown/'
import buttongroup from './buttongroup/'
import listtree from './listtree/'
import numberinput from './numberinput/'
import progress from './progress/'
import selecteusersearch from './selecteusersearch/'
import selectelessonsearch from './selectelessonsearch/'
import selectesearch from './selectesearch/'
import lessonhours from './lessonhours/'
import lessonprice from './lessonprice/'
import lessontype from './lessontype/'
import studentrouter from './studentrouter/'
import studenttracksadd from './studenttracksadd/'
import lasttrack from './lasttrack/'
import checkstatus from './checkstatus/'
import checkweek from './checkweek/'

const components = [
    dropdown.LbDropdown,
    dropdown.LbDropdownButton,
    buttongroup,
    listtree.LbListTree,
    listtree.LbListtreeItem,
    numberinput,
    progress,
    selecteusersearch,
    lessonhours,
    lessonprice,
    lessontype,
    studentrouter,
    studenttracksadd,
    lasttrack,
    checkstatus,
    selectelessonsearch,
    checkweek,
    selectesearch
]
const install = function(Vue) {
    if (install.installed) return

    components.map(component => {
        Vue.component(component.name, component)
    })
}
export default {
    version: '1.0.1',
    install,
    dropdown,
    buttongroup,
    listtree,
    numberinput,
    progress,
    selecteusersearch,
    lessonhours,
    lessonprice,
    lessontype,
    studentrouter,
    studenttracksadd,
    lasttrack,
    checkstatus,
    selectelessonsearch,
    checkweek,
    selectesearch
}