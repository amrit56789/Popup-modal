<template>
<div id="app">
    <input ref="inputField" type="text">
    <button @click="focusInput">Focus</button>
    <button @click="showModal = true">Show Popup Modal</button>
    <Modal v-if="showModal" :title="modalTitle" :content="modalContent" :theme="theme" @close="showModal = false">
        <template v-slot:links>
            <a href="https://www.myntra.com/">Shop Now</a>
            <a href="https://www.myntra.com/tac#:~:text=Any%20queries%2Fcomplaints%20or%20dispute,customer%20care%20%40%20080%206156%201999.">Contact Us</a>
        </template>
    </Modal>
</div>
</template>

<script>
import Modal from './components/Modal.vue';

export default {
    name: 'App',
    components: {
        Modal
    },
    data() {
        return {
            showModal: false,
            modalTitle: 'Sign up for the Giveaway!',
            modalContent: 'Grab your ninja swag for half price!',
            theme: 'light'
        };
    },
    methods: {
        focusInput() {
            this.$refs.inputField.focus();
        }
    }
};
</script>

<style scoped>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

button {
    margin: 5px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    background-color: #3498db;
    border: none;
    border-radius: 5px;
    color: white;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #2980b9;
}

input[type="text"] {
    padding: 10px;
    margin-bottom: 20px;
    border: 2px solid #3498db;
    border-radius: 5px;
    font-size: 16px;
}

a {
    display: inline-block;
    background-color: #5f849c;
    color: white;
    padding: 10px 20px;
    margin: 5px;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

a:hover {
    background-color: #2980b9;
}
</style>
