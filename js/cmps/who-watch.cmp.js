export default {
    template: `
        <section class="who-watch">
        <button @click="onAdd"> add</button>
            <h1>who-watch</h1>
            <ul>

              <li v-for="watcher in watchers" key ="watcher._id"> 
                <preview-watcher :watcher="watcher"/>
                <button @click ="onRemove(watcher._id)">x</button>
                <button @click ="onSelect(watcher._id)">details</button>
                <button @click ="onEdit(watcher._id)">Edit</button>
              </li>  
            </ul>

            <hr/>
            <section  class = "selected" v-if="selected">
                 Details
                 <!-- <pre>{{selected}}</pre> -->
                 <h1>{{selected.name}}</h1>
                 <button @click="onSelect('')">x</button>
            </section>

        </section>
    `,
    data() {
        return {
            watchers: [
                { _id: 'w_101', name: 'miki', imgUrl: 'https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg', favoriteMovies: [{ name: 'hagiga basnuker 1' }] },
                { _id: 'w_102', name: 'puki', imgUrl: 'https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg', favoriteMovies: [{ name: 'hagiga basnuker 2' }] },
                { _id: 'w_103', name: 'muki', imgUrl: 'https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg', favoriteMovies: [{ name: 'hagiga basnuker 3' }] },
            ],
            selected: ''
        }
    },
    methods: {
        onRemove(watcherId) {
            this.watchers = this.watchers.filter(w => w._id !== watcherId)
        },

        onAdd() {
            const _id = Math.ceil(Math.random() * 1000)
            const watcher = {
                _id,
                name: `Watcher-${_id}`,
                favoriteMovies: [{ name: 'hagiga basnuker' + (Math.ceil(Math.random) * 10) }],
                imgUrl: 'https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg'
            }
            this.watchers.push(watcher)
            console.log(this.watchers)
        },
        onSelect(watcherId) {
            console.log('watcherId:', watcherId)

            const selectedWatcher = this.watchers.filter(w => w._id === watcherId)
            console.log('selectedWatcher:', selectedWatcher)
            this.selected = selectedWatcher[0]

        },

    },

    created() {

    },
    computed: {
    }
}
