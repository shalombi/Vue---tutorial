export default {

    template: `
        <section class="show-time">
          
           <h1>show-time</h1>
           <h3> {{time}}</h3>
           <div >
               <img :src="setSeasonImgUrl()" class="season-img" />
           </div>
           
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
            // console.log(formattedTime);
            return formattedTime
        },


        setSeasonImgUrl() {
            const month = (new Date()).getMonth() + 1
            let base_url = '../../img'
            if (month > 9) return `${base_url}/fall.png`
            if (month > 6) return `${base_url}/summer.png`
            if (month > 3) return `${base_url}/spring.png`
            return `${base_url}/winter.png`
        }

    },

    created() {
        console.log('created')
        setInterval(() => {
            this.time = this.getCurrTime()
        }, 1000)
    },
    computed: {
    }
}