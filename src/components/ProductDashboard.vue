<template>
    <div>
        <h1>Product Dashboard</h1>
        <form @submit.prevent="addProduct">
            <div>
                <label for="name">Product Name:</label>
                <input type="text" id="name" v-model="product.name" required/>
            </div>
            <div>
                <label for="description"> Description:</label>
                <textarea id="description" v-model="product.description " required></textarea>
            </div>
            <div>
                <label for="price">Price:</label>
                <input type="number" id="price" v-model="product.quantity" required />
            </div>
            <div>
                <label for="category">Category:</label>
                <select name="category" id="product.category" required>
                    <option value="food">Food</option>
                    <option value="non-food">Non-Food</option>
                </select>
            </div>
            <div>
                <label for="image">Image URL:</label>
                <input type="text" id="image" v-model="product.image" />
            </div>
            <button type="submit"> Add Product</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'ProductDashboard',
    data () {
        return {
            product:{
                name: '',
                description: '',
                price: 0,
                quantity: 0,
                category: 'food',
                image: ''
            }
        };
    },
    /methods: {
        addProduct() {
            // Logic to save the product
            console.log(this.product);
            // Reset the form
            this.product = {
                name: '',
                description: '',
                price: 0,
                quantity: 0,
                category: 'food',
                image: ''
            };
        }
    }
};
</script>

<style>
/* Add styles here */
</style>