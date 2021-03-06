import dropdown from './dropdown/'
import buttongroup from './buttongroup/'
import listtree from './listtree/'
import {
    DatePicker,
    TimePicker,
    Table,
    TableColumn,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Upload,
    Message,
    MessageBox,
    Pagination,
    Cascader,
    Select,
    Option
} from 'element-ui'

DatePicker.name = 'lb-date-picker'
TimePicker.name = 'lb-time-picker'
Table.name = 'lb-table'
TableColumn.name = 'lb-table-column'
Dropdown.name = 'lb-dropdowns'
DropdownMenu.name = 'lb-dropdown-menu'
DropdownItem.name = 'lb-dropdown-item'
Upload.name = 'lb-upload'
Pagination.name = 'lb-pagination'
Cascader.name = 'lb-cascader'
Select.name = 'lb-select'
Option.name = 'lb-option'

const components = [
    dropdown.LbDropdown,
    dropdown.LbDropdownButton,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    buttongroup,
    DatePicker,
    TimePicker,
    Table,
    TableColumn,
    Upload,
    listtree.LbListTree,
    listtree.LbListtreeItem,
    Pagination,
    Cascader,
    Select,
    Option
]

const install = function(Vue) {
    if (install.installed) return

    components.map(component => {
        Vue.component(component.name, component)
    })
    Vue.prototype.$message = Message
    Vue.prototype.$confirm = MessageBox.confirm
}

export default {
    version: '1.0.1',
    install,
    dropdown,
    buttongroup,
    DatePicker,
    TimePicker,
    Table,
    TableColumn,
    Upload,
    Pagination,
    Cascader
}
