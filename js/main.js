const { createApp } = Vue
// import simpleCounter from './cmps/simple-counter.cmp.js'
import showTime from './cmps/show-time.cmp.js'

const options = {
    template: `
        <show-time />
    `,

}
const app = createApp(options)

app.component('show-time', showTime)
app.mount('#app')
