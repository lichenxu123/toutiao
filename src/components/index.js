import layoutAside from './home/layout-aside'
import Herder from './home/herder'

export default {
    install(Vue) {
        Vue.component('layout-aside', layoutAside)
        Vue.component('herder', Herder)
    }
} 