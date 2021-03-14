var pets = [
    {
        "id": 1001,
        "name": "Siberian Husky",
        "description": "The Siberian Husky is a medium-sized working sled dog breed. The breed belongs to the Spitz genetic family. It is recognizable by its thickly furred double coat, erect triangular ears, and distinctive markings, and is smaller than the similar-looking Alaskan Malamute.",
        "price": 241.00,
        "image": "https://factcity.com/wp-content/uploads/2020/02/facts-about-Siberian-huskies-scaled.jpg",
        "count": 10,
        "rating": 4
    },
    {
        "id": 1002,
        "name": "Poodle",
        "description": "The Poodle is a dog breed that comes in three varieties: Standard Poodle, Miniature Poodle, and Toy Poodle. The breed’s origin is disputed: whether it descends from Germany as a type of water dog, or from the French Barbet",
        "price": 2.99,
        "image": "https://poodlereport.com/wp-content/uploads/2019/10/Canva-medium-size-poodle-1024x683.jpg",
        "count": 7,
        "rating": 3
    },
    {
        "id": 1003,
        "name": "German Shepherd",
        "description": "The German Shepherd is a breed of medium to large-sized working dog that originated in Germany. According to the FCI, the breed's English language name is German Shepherd Dog",
        "price": 11.00,
        "image": "https://upload.wikimedia.org/wikipedia/commons/d/d0/German_Shepherd_-_DSC_0346_%2810096362833%29.jpg",
        "count": 99,
        "rating": 4
    },
    {
        "id": 1004,
        "name": "Golden Retriever",
        "description": "The Golden Retriever is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties. The name \"retriever\" refers to the breed's ability to retrieve shot game undamaged due to their soft mouth.",
        "price": 7.99,
        "image": "https://cdn.orvis.com/images/DBS_GoldRetriever_1280.jpg",
        "count": 11,
        "rating": 5
    },
    {
        "id": 1005,
        "name": "Pomeranian",
        "description": "The Pomeranian is a breed of dog of the Spitz type that is named for the Pomerania region in north-west Poland and north-east Germany in Central Europe. Classed as a toy dog breed because of its small size, the Pomeranian is descended from larger Spitz-type dogs, specifically the German Spitz.",
        "price": 49.99,
        "image": "https://vetstreet.brightspotcdn.com/dims4/default/ed14d62/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F58%2F35%2F8cdde1f54ad986b94f1cdfebd990%2Fpomeranian-AP-0BISNY-645sm8513.jpg",
        "count": 25,
        "rating": 4
    }
];

var fluffyApp = new Vue({
    el: "#fluffy",
    data: {
        storename: 'My Fluffy',
        pets: pets,
        cart: [],
    },
    computed: {

        cartCount() {
            return this.cart.length;
        },


        sortedList() {
            return pets;
        }
    }
});