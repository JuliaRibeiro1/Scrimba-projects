export const menuArray = [
    {
        name: "Pizza",
        ingredients: ["pepperoni", "mushrom", "mozarella"],
        id: 0,
        price: 14,
        image: "./imgs/pizza.jpg",
        options:[
            {
                optionName: "Greek style",
                optionsDescription: ["Tomato sauce","feta","eliá kalamatas","artichoke","oregano"],
                optionPrice:11,
                quantity:0,
                optionId:0.1


            },
            {
                optionName: "California style",
                optionsDescription: ["Shrimps","asparagus","seafood","pineapple"],
                optionPrice:12,
                quantity:0,
                optionId:0.2
                

            },
            {
                optionName: "Anchovy pizza",
                optionsDescription: ["Tomato sauce","creamy mozzarella","salty anchovies capers","oregano"],
                optionPrice:11.50,
                quantity:0,
                optionId:0.3
                

            },
            {
                optionName: "Margherita pizza",
                optionsDescription: ["Crushed San Marzano tomato sauce","mozzarella","basil","olive oil"],
                optionPrice:10,
                quantity:0,
                optionId:0.4
                

            },
        ],
    },
    {
        name: "Hamburger",
        ingredients: ["beef", "cheese", "lettuce"],
        price: 12,
        image: "./imgs/hamburguer.jpg",
        id: 1,
        options:[
            {
                optionName: "Theta",
                optionsDescription: ["Bun","cheddar cheese","dill Pickles","mayonnaise","hickory sauce","beef patty"],
                optionPrice:5.50,
                quantity:0,
                optionId:1.1


            },
            {
                optionName: "Green Chile Cheesburger",
                optionsDescription: ["Bun","onion","cheese","lettuce","tomato"," mexico green chile","beef patty"],
                optionPrice:6,
                quantity:0,
                optionId:1.2
                

            },
            {
                optionName: "Pastrami",
                optionsDescription: ["Bun","fry sauce","onions","lettuce","pastrami","tomatos","american cheese","beef patty"],
                optionPrice:6,
                quantity:0,
                optionId:1.3
                

            },
            {
                optionName: "Australian",
                optionsDescription: ["Bun","tomato-based sauce","pickled beetroot","tomato","stewed onions","lettuce","beef patty"],
                optionPrice:5.75,
                quantity:0,
                optionId:1.4
                

            },
        ],
    },
   /*   {
        name: "Beer",
        ingredients: ["grain, hops, yeast, water"],
        price: 12,
        image:"./imgs/beer.jpg",
        id: 2
    }*/
]