var pets = [
    {
        "id": 1001,
        "name": "Siberian Husky",
        "description": "The Siberian Husky is a medium-sized working sled dog breed. The breed belongs to the Spitz genetic family. It is recognizable by its thickly furred double coat, erect triangular ears, and distinctive markings, and is smaller than the similar-looking Alaskan Malamute.",
        "price": 500,
        "image": "https://factcity.com/wp-content/uploads/2020/02/facts-about-Siberian-huskies-scaled.jpg",
        "count": 4,
        "rating": 4,
        "cart_amount": 0,
    },
    {
        "id": 1002,
        "name": "Poodle",
        "description": "The Poodle is a dog breed that comes in three varieties: Standard Poodle, Miniature Poodle, and Toy Poodle. The breed’s origin is disputed: whether it descends from Germany as a type of water dog, or from the French Barbet",
        "price": 372,
        "image": "https://poodlereport.com/wp-content/uploads/2019/10/Canva-medium-size-poodle-1024x683.jpg",
        "count": 3,
        "rating": 3,
        "cart_amount": 0,
    },
    {
        "id": 1003,
        "name": "German Shepherd",
        "description": "The German Shepherd is a breed of medium to large-sized working dog that originated in Germany. According to the FCI, the breed's English language name is German Shepherd Dog",
        "price": 126,
        "image": "https://upload.wikimedia.org/wikipedia/commons/d/d0/German_Shepherd_-_DSC_0346_%2810096362833%29.jpg",
        "count": 12,
        "rating": 4,
        "cart_amount": 0,
    },
    {
        "id": 1004,
        "name": "Golden Retriever",
        "description": "The Golden Retriever is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties. The name \"retriever\" refers to the breed's ability to retrieve shot game undamaged due to their soft mouth.",
        "price": 289,
        "image": "https://cdn.orvis.com/images/DBS_GoldRetriever_1280.jpg",
        "count": 6,
        "rating": 5,
        "cart_amount": 0,
    },
    {
        "id": 1005,
        "name": "Pomeranian",
        "description": "The Pomeranian is a breed of dog of the Spitz type that is named for the Pomerania region in north-west Poland and north-east Germany in Central Europe. Classed as a toy dog breed because of its small size, the Pomeranian is descended from larger Spitz-type dogs, specifically the German Spitz.",
        "price": 637,
        "image": "https://vetstreet.brightspotcdn.com/dims4/default/ed14d62/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F58%2F35%2F8cdde1f54ad986b94f1cdfebd990%2Fpomeranian-AP-0BISNY-645sm8513.jpg",
        "count": 2,
        "rating": 4,
        "cart_amount": 0,
    }
];

function dismissModal() {
    var cartContent = document.getElementById('cartContent');
    bootstrap.Modal.getInstance(cartContent).hide(); 
}

var fluffyApp = new Vue({
    el: "#fluffy",
    data: {
        storename: 'My Fluffy',
        pets: pets,
        cart: [],
        sortBy: "",
        orderBy: "name"
    },
    methods: {

        addToCart(pet, index) {
            this.cart.push(pet);
            this.sortedList[index].count--;
            this.sortedList[index].cart_amount++;
        },

        canAdd(pet) {
            return (pet.count > 0);
        },

        hasItem() {
            return this.cart.length > 0;
        },

        removeFromCart(index) {
            --this.pets[index].cart_amount;
            ++this.pets[index].count;
            this.cart.splice(index, 1);


            //dismiss modal when there are no more content in the cart 
            if (this.cart.length < 1) {
                dismissModal();
            }
        }

    },

    computed: {

        cartCount() {
            return this.cart.length;
        },


        sortedList() {
            let orderBy = this.orderBy;
            let sortBy = this.sortBy;


            let list = this.pets.slice(0);

            if (orderBy === 'count') {
                function compare(a, b) {
                    if (a.count > b.count) {
                        return sortBy == 'asc' ? 1 : -1;
                    } else {
                        return sortBy == 'asc' ? -1 : 1;
                    }
                }
                return list.sort(compare);
            } else if (orderBy === 'price') {
                function compare(a, b) {
                    if (a.price > b.price) {
                        return sortBy == 'asc' ? 1 : -1;
                    } else {
                        return sortBy == 'asc' ? -1 : 1;
                    }
                }
                return list.sort(compare);
            } else {
                function compare(a, b) {
                    if (a.name.substring(0, 1) > b.name.substring(0, 1)) {
                        return sortBy == 'asc' ? 1 : -1;
                    } else {
                        return sortBy == 'asc' ? -1 : 1;
                    }
                }
                return list.sort(compare);
            }
        }
    }
});