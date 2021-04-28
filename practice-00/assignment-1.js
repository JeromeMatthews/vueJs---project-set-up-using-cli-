Vue.component('app-comp', {
    props: ['hobby'],

    template: '<ul> <li @click="deleteHobby"> {{ hobby }} </li> </ul>',

    methods: {

        deleteHobby: function(h) {
            this.$emit('itemdeleted',this.hobby);

        }


    }

});


new Vue({
        el: '#app',

        data: {
            hobby: '',
            hobbies: ['Cooking','Kayaking','Dance','Graphic Design','Programming','Kniting'],
            itemDeleted: false,
          
        },

        methods: {
            addHobby: function() {
                this.hobbies.push(this.hobby);
                this.itemDeleted = false;
             alert("New hobby added!");
             
            },

            showHobbies: function() {

                console.log('Current list of hobbies in array:'+ '-' + this.hobbies);


            }, 
            deletedHobby: function(h) {
                let position = this.hobbies.indexOf(h)
                this.hobbies.splice(position, 1);
                this.itemDeleted = true;


            }

            


           
        }

})


