//component approach: more structured, similar to Angular
//It has to preceed any of the vue instances that it is meant to be
//used in.

//implement the component in one of the existing Vue object instances.
Vue.component('app-component', {

    props: ['username'],
    data: function() {
        return {
            username: 'Derryl'
        }
    },
    template: '<p @click="userClicked"> {{ username }} </p>',

    methods: {
        userClicked: function(){
            this.$emit('usrclicked', this.username);
        }

    }
});



new Vue({
    el:'#app',
    data: {

        name: 'Jerome',
        newName: '',
        elements: [],
        classnames: []

    }, 
    methods: {
        changeName: function() {
            this.name = 'Matt';
            if(this.name == 'Matt'){
                
            }
        },

        changeBack: function() {
            this.name = 'Jerome';
        },

        addElement: function(){
            this.elements.push(this.elements.length + 1);
        },

        addNewName: function(){
            this.name = this.newName;
            this.classnames.push(this.name);

        },

        getColor: function(number){
           return number % 2 == 0 ? 'teal' : 'orange'; 
        }

    }
})

//Most basic Vue implementation using an Object.
new Vue({

    el: '#app2',
    data:{
        output: 'Hello There second Vue instance being used'
    },

    methods: {
        usrWasclicked(name){
            alert(name.toUpperCase());
        }
    }


})

