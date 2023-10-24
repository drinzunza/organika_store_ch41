let catalog =[
    {
        "title": "Orange",
        "category": "fruit",
        "price": 43.24,
        "image": "orange.jpeg",
        "_id": "1",
    },
    {
        "title": "Banana",
        "category": "fruit",
        "price": 37.345,
        "image": "banana.jpeg",
        "_id": "2",
    },
    {
        "title": "Avocado",
        "category": "fruit",
        "price": 50.00,
        "image": "avocado.jpeg",
        "_id": "3",
    },
    {
        "title": "Cheese",
        "category": "farm",
        "price": 150,
        "image": "cheese.jpeg",
        "_id": "4",
    },
    {
        "title": "Chocolate",
        "category": "groseries",
        "price": 29.4,
        "image": "chocolate.jpeg",
        "_id": "5",
    },
    {
        "title": "Vitamins",
        "category": "merchandise",
        "price": 123.44,
        "image": "vitamins.jpeg",
        "_id": "6",
    },
    {
        "title": "Milk",
        "category": "farm",
        "price": 44.56,
        "image": "milk.jpeg",
        "_id": "7",
    },

];

class DataService {
    getProducts(){
        return catalog;
    }
}

export default DataService;