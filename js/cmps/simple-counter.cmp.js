export default {
    props:['initVal'],
    template: `
        <section class="simple-counter" v-bind:style="sectionStyle">
            <button v-bind:disabled="counter <= 0" v-on:click="changeCounter(-1)">-</button>
            <span class="counter" v-bind:class="counterStyle">{{ counter }}</span>
            <button v-bind:disabled="counter >= 10" v-on:click="changeCounter(1)">+</button>
        </section>
    `,
    data(){
        return {
            counter: this.initVal || 4,
        }
    },
    methods: {
        changeCounter(diff){
            this.counter += diff
            this.$emit('counter-changed', this.counter)
        }
    },
    computed: {
        counterStyle(){
            return { low: this.counter < 3, high: this.counter > 7 }
        },
        sectionStyle(){
            return { 
                borderBottomWidth: this.counter + 'px' ,
                opacity: 1 - this.counter / 20
            }
        }
    }
}