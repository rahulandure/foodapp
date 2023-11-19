import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  foodDetails = [
    {
      id:1,
      foodName:"Paneer Tikka Masala",
      foodDetails:"Paneer Tikka Masala is a popular Indian curry where cubes of paneer (Indian cottage cheese), onions and peppers are marinated with yogurt and spices, grilled and then tossed in a creamy tomato based curry.",
      foodPrize:199,
      foodImg:"https://images.pexels.com/photos/9609838/pexels-photo-9609838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id:2,
      foodName:"Pasta on White Plate",
      foodDetails:"a type of food typically made from an unleavened dough of wheat flour mixed with water or eggs, and formed into sheets or other shapes, then cooked by boiling or baking.",
      foodPrize:259,
      foodImg:"https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id:3,
      foodName:"Fried Chicken",
      foodDetails:" a dish consisting of chicken pieces that have been coated with seasoned flour or batter and pan-fried, deep fried, pressure fried, or air fried",
      foodPrize:199,
      foodImg:"https://images.pexels.com/photos/3926125/pexels-photo-3926125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id:4,
      foodName:"Ultimate Veggie Pizza",
      foodDetails:"This vegetarian pizza recipe will delight vegetarians and carnivores alike. It’s fresh and full of flavor, featuring cherry tomatoes, artichoke, bell pepper, olives, red onion and some hidden (and optional) baby spinach.",
      foodPrize:399,
      foodImg:"https://images.pexels.com/photos/12261064/pexels-photo-12261064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id:5,
      foodName:"Club Sandwich",
      foodDetails:"slices of meat, cheese, or other food placed between two slices of bread.",
      foodPrize:149,
      foodImg:"https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id:6,
      foodName:"Cheese burger and Fries",
      foodDetails:"a hamburger with a slice of melted cheese on top of the meat patty, added near the end of the cooking time.",
      foodPrize:249,
      foodImg:"https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

  ]

}
