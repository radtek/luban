<template>
    <div class="lbBody" :style="getClientHeight">
        <template v-if="getCurrentView ==1">
            <lb-moduletable :module="moduleObj">
            </lb-moduletable>
        </template>
        <template v-if="getCurrentView == 0">
            <component v-bind:is="currentView">
            </component>
        </template>
        <template v-if="getCurrentView == 2">
            <lb-blank @blankmounted="blankmounted">
            </lb-blank>
        </template>
    </div>
</template>
<script>
import pages from '~/stores/viewpages.js'
import blank from './blank.vue'
import module from '~/stores/module.js'

pages['lb-blank'] = blank

export default {
    name: 'body',
    data() {
        return {
            clientHeight: '800px',
            overflowy: 'auto'
        }
    },
    components: pages,
    beforeCreate() {
        let system = JSON.parse(window.localStorage.getItem('system'))
        if (system) {
            this.$store.commit('system', system)
        }
    },
    mounted() {
        document.body.onresize = this.resize
        this.clientHeight = (document.body.clientHeight - 131) + 'px'
        if (this.$store.state.system.login) {
            this.getroles()
        }
    },
    computed: {
        getClientHeight() {
            return {
                'height': this.clientHeight,
                'overflow-y': this.overflowy
            }
        },
        getCurrentView() {
            let isModlues = 0
            if (window.location.href.indexOf('/#/system/reg') != -1) {
                this.currentView = 'lb-systemreg'
                window.location.href = '/#'
            } else if (!this.$store.state.system.login) {
                this.currentView = 'lb-systemsign_in'
            } else if (!this.$store.state.models.login) {
                this.currentView = 'lb-systemsign_in'
            } else {
                let to = this.$store.state.system.router
                let view = 'lb-studentadd'
                if (to == '/' || to == '/web') {
                    view = 'lb-studentadd'
                } else {
                    if (to) {
                        let tomodule = to.replace(/\//g, '')
                        if (module[tomodule]) {
                            this.moduleObj = tomodule
                            if (this.$store.state.system.isModlues) {
                                this.$store.state.system.isModlues = false
                                isModlues = 1
                            } else {
                                isModlues = 2
                            }
                        }
                        else {
                            view = 'lb-' + to.replace(/\//g, '')
                        }
                    }
                }
                this.currentView = view
            }
            return isModlues
        }
    },
    methods: {
        resize() {
            this.clientHeight = (document.body.clientHeight - 131) + 'px'
        },
        blankmounted() {
            this.$store.state.system.isModlues = true
        }
    },
}
</script>