const { createApp } = Vue
// import simpleCounter from './cmps/simple-counter.cmp.js'
import showTime from './cmps/show-time.cmp.js'
import countDown from './cmps/count-down.cmp.js'
import whoWatch from './cmps/who-watch.cmp.js'
import previewWatcher from './cmps/preview-watcher.cmp.js'

// preview-watcher.cmp

const options = {
    template: `
        <show-time />
        <count-down :time=70 />
        <who-watch/>
    `,

}
const app = createApp(options)

app.component('show-time', showTime)
app.component('count-down', countDown)
app.component('who-watch', whoWatch)
app.component('preview-watcher', previewWatcher)



app.mount('#app')
