export default {
    props: ['time'],
    template: `
        <section class="count-down">
      
          
            <h1>count-down</h1>
            <h2 :class='{ brown: currTime <= 5, black: counter > 5 }' >{{formatSecondsToTime (currTime)}}</h2>
        </section>
    `,
    data() {
        return {
            currTime: this.time
        }
    },
    methods: {
        startInterval() {
            let intervalId = setInterval(() => {

                this.currTime = this.currTime - 1
                if (!this.currTime) clearInterval(intervalId)
                // console.log(this.currTime, 'this.currTime')
            }, 1000)
        },

        formatSecondsToTime(seconds) {
            var minutes = Math.floor(seconds / 60); // חישוב כמות הדקות
            var remainingSeconds = seconds % 60; // חישוב השניות הנותרות
            // עיצוב הדקות והשניות עם אפסים ראשונים אם הם קטנים מ־10
            var formattedTime = (minutes < 10 ? "0" + minutes : minutes) + ":" + (remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds);
            return formattedTime;
        }
    },

    created() {
        // console.log(typeof this.time)
        // this.startInterval()
    },
    computed: {
    }
}