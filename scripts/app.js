let objects=[
    
     {
            objName:TV,
            price:1500,
            rating:8.5,
            year:2021,
            category:Electronic,
            sale:true,
        },
        {
        objName:PHONE,
        price:1000,
        rating:8.0,
        year:2012,
        category:Electronic,
        sale:false,
    },

    {
        objName:Car,
        price:15000,
        rating:9.0,
        year:2022,
        category:Electronic,
        sale:true,
    },
    {
        objName:Plane,
        price:30000,
        rating:6.7,
        year:2012,
        category:Electronic,
        sale:false,
    },
    {
        objName:Computer,
        price:1200,
        rating:9.0,
        year:2024,
        category:Electronic,
        sale:true,
    },
    {
        objName:Motobike,
        price:3000,
        rating:7.5,
        year:2021,
        category:Electronic,
        sale:false,
    },
    {
        objName:Bike,
        price:700,
        rating:2.2,
        year:2012,
        category:Electronic,
        sale:false,
    },
    
    
    
    
]
let object=objects.filter(object=> object.price > 300<500);
console.log(object);
let object1=objects.filter(object=> object.rating > 3.2);
console.log(object);
let object2=objects.filter(object=> object.year > 2015);
console.log(object);
let object3=objects.filter(object=> object.category =Electronic);
console.log(object);
let object4=objects.filter(object=> object.sale = true);
console.log(object);


