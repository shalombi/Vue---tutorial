export default {
    props:['pet'],
    template: `
        <h2>{{ pet.name }}</h2>
    `,
    created(){
        console.log('Creating', this.pet.id)
    },
    unmounted(){
        console.log('Unmounting', this.pet.id)
    }
}