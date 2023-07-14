export default {
    props: ['watcher'],
    template: `
    <section class="preview-watcher">
        <img class="img-url" :src="watcher.imgUrl"/>
        <h2>{{ watcher.name }}</h2>
    </section>
    `,
    created() {
    },

}