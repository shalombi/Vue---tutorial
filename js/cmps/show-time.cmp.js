export default {

    template: `
        <section class="show-time">
          
           <h1>show-time</h1>
           {{time}}
        </section>
    `,
    data() {
        return {
            time: ''
        }
    },
    methods: {

        getCurrTime() {
            // Create a new Date object
            var currentDate = new Date();
            // Get the current hours and minutes
            var hours = currentDate.getHours();
            var minutes = currentDate.getMinutes();
            var seconds = currentDate.getSeconds();
            // Format the hours and minutes
            var formattedTime = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
            // Print the formatted time
            console.log(formattedTime);
            return formattedTime
        },


         seasonImg() {
            const month = (new Date()).getMonth() + 1
            if (month > 9) return 'fall'
            if (month > 6) return 'summer'
            if (month > 3) return 'spring'
            return 'winter'
        }
    
    },

    created() {
        console.log('created')
        // this.getCurrTime()
        setInterval(() => {
            this.time = this.getCurrTime()
        }, 1000)
    },
    computed: {
    }
}