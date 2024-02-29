import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  sarees: any = [{
    id: "s1",
    name: "Black cotton printed saree",
    image: "../assets/images/saree-product/saree1.webp",
    price: "4,999",
    priceRange: "3000-6000",
    color: "Black",
    category: "chanderi",
    fabric: "cotton"
  },
  {
    id: "s2",
    name: "Pink handloom printed saree",
    image: "../assets/images/saree-product/saree2.webp",
    price: "4,999",
    priceRange: "3000-6000",
    color: "Pink",
    category: "handloom",
    fabric: "cotton"
  },
  {
    id: "s3",
    name: "Orange plain banarasi saree",
    image: "../assets/images/saree-product/saree3.webp",
    price: "4,999",
    priceRange: "3000-6000",
    color: "Orange",
    category: "banarasi",
    fabric: "silk"
  },
  {
    id: "s4",
    name: "Pink pure silk  printed saree",
    image: "../assets/images/saree-product/saree4.webp",
    price: "4,999",
    priceRange: "3000-6000",
    color: "Pink",
    category: "banarasi",
    fabric: "silk"
  },
  {
    id: "s5",
    name: "Linen hand printed saree",
    image: "../assets/images/saree-product/saree5.webp",
    price: "4,999",
    priceRange: "3000-6000",
    color: "Pink",
    category: "linen",
    fabric: "linen"
  },
  {
    id: "s6",
    name: "Black cotton printed saree",
    image: "../assets/images/saree-product/saree1.webp",
    price: "4,999",
    priceRange: "3000-6000",
    color: "Black",
    category: "chanderi",
    fabric: "chiffon"
  },
  {
    id: "s7",
    name: "Pink handloom printed saree",
    image: "../assets/images/saree-product/saree2.webp",
    price: "4,999",
    priceRange: "3000-6000",
    color: "Pink",
    category: "handloom",
    fabric: "cotton"
  },
  {
    id: "s8",
    name: "Orange plain banarasi saree",
    image: "../assets/images/saree-product/saree3.webp",
    price: "4,999",
    priceRange: "3000-6000",
    color: "Orange",
    category: "banarasi",
    fabric: "silk"
  },
  {
    id: "s9",
    name: "Pink pure silk  printed saree",
    image: "../assets/images/saree-product/saree4.webp",
    price: "4,999",
    priceRange: "3000-6000",
    color: "Pink",
    category: "banarasi",
    fabric: "silk"
  },
  {
    id: "s10",
    name: "Linen hand printed saree",
    image: "../assets/images/saree-product/saree5.webp",
    price: "4,999",
    priceRange: "3000-6000",
    color: "Pink",
    category: "linen",
    fabric: "georgette"
  },
  {
    id: "s11",
    name: "Black cotton printed saree",
    image: "../assets/images/saree-product/saree1.webp",
    price: "4,999",
    priceRange: "3000-6000",
    color: "Black",
    category: "chanderi",
    fabric: "cotton"
  },
  {
    id: "s12",
    name: "Pink handloom printed saree",
    image: "../assets/images/saree-product/saree2.webp",
    price: "4,999",
    priceRange: "3000-6000",
    color: "Pink",
    category: "handloom",
    fabric: "cotton"
  }
  ];
  bags: any = [
    {
      id: "b1",
      name: "Bag",
      image: "../assets/images/bag-product/bag1.avif",
      price: "999",
      priceRange: "under rs.1000",
      color: "Black",
      category: "Tote",
      fabric: "Leather"
    },
    {
      id: "b2",
      name: "Bag",
      image: "../assets/images/bag-product/bag2.avif",
      price: "999",
      priceRange: "under rs.1000",
      color: "Multicolored",
      category: "Tote",
      fabric: "Leather"
    },
    {
      id: "b3",
      name: "Bag",
      image: "../assets/images/bag-product/bag3.avif",
      price: "1899",
      priceRange: "rs. 1000-3000",
      color: "Black",
      category: "Sling",
      fabric: "Leather"
    },
    {
      id: "b4",
      name: "Bag",
      image: "../assets/images/bag-product/bag4.avif",
      price: "867",
      priceRange: "under rs.1000",
      color: "Multicolored",
      category: "ShoulderBag",
      fabric: "Faux"
    },
    {
      id: "b5",
      name: "Bag",
      image: "../assets/images/bag-product/bag5.avif",
      price: "1049",
      priceRange: "rs. 1000-3000",
      color: "Brown",
      category: "Sling",
      fabric: "Leather"
    },
    {
      id: "b6",
      name: "Bag",
      image: "../assets/images/bag-product/bag1.avif",
      price: "999",
      priceRange: "under rs.1000",
      color: "Black",
      category: "Tote",
      fabric: "Leather"
    },
    {
      id: "b7",
      name: "Bag",
      image: "../assets/images/bag-product/bag2.avif",
      price: "999",
      priceRange: "under rs.1000",
      color: "Multicolored",
      category: "Tote",
      fabric: "Leather"
    },
    {
      id: "b8",
      name: "Bag",
      image: "../assets/images/bag-product/bag3.avif",
      price: "1899",
      priceRange: "rs. 1000-3000",
      color: "Black",
      category: "Sling",
      fabric: "Leather"
    },
    {
      id: "b9",
      name: "Bag",
      image: "../assets/images/bag-product/bag4.avif",
      price: "867",
      priceRange: "under rs.1000",
      color: "Multicolored",
      category: "ShoulderBag",
      fabric: "Faux"
    },
    {
      id: "b10",
      name: "Bag",
      image: "../assets/images/bag-product/bag5.avif",
      price: "999",
      priceRange: "rs. 1000-3000",
      color: "Brown",
      category: "Sling",
      fabric: "Leather"
    },
    {
      id: "b11",
      name: "Bag",
      image: "../assets/images/bag-product/bag1.avif",
      price: "999",
      priceRange: "under rs.1000",
      color: "Black",
      category: "Tote",
      fabric: "Leather"
    },
    {
      id: "b12",
      name: "Bag",
      image: "../assets/images/bag-product/bag2.avif",
      price: "999",
      priceRange: "under 1000",
      color: "Multicolored",
      category: "Tote",
      fabric: "Leather"
    },

  ];
  blouses: any = [{
    id: "bl1",
    name: "Beige Woven Pure Tussar Silk Blouse",
    image: "../assets/images/blouse-product/blouse1.jpg",
    price: "790",
    priceRange: "under rs.1000",
    color: "Beige",
    category: "Woven",
    fabric: "Silk"
  },
  {
    id: "bl2",
    name: "Blue Pure Silk Cotton Printed Embroidery Blouse",
    image: "../assets/images/blouse-product/blouse2.jpg",
    price: "599",
    priceRange: "Under rs.1000",
    color: "Blue",
    category: "Embroidery",
    fabric: "Silk"
  },
  {
    id: "bl3",
    name: "Black Tie and Dye Leheriya Silk Cotton Blouse",
    image: "../assets/images/blouse-product/blouse3.jpg",
    price: "1100",
    priceRange: "rs. 1000-3000",
    color: "Black",
    category: "Tie-Die",
    fabric: "Silk"
  },
  {
    id: "bl4",
    name: "Off White Pure Cotton Embroidery Schiffli Blouse",
    image: "../assets/images/blouse-product/blouse4.jpg",
    price: "1200",
    priceRange: "rs. 1000-3000",
    color: "White",
    category: "Embroidery",
    fabric: "Cotton"
  },
  {
    id: "bl5",
    name: "Yellow Woven Viscose Blouse",
    image: "../assets/images/blouse-product/blouse5.jpg",
    price: "1000",
    priceRange: "rs. 1000-3000",
    color: "Yellow",
    category: "Woven",
    fabric: "Viscose"
  },
  {
    id: "bl6",
    name: "Beige Woven Pure Tussar Silk Blouse",
    image: "../assets/images/blouse-product/blouse1.jpg",
    price: "790",
    priceRange: "under rs.1000",
    color: "Beige",
    category: "Woven",
    fabric: "Silk"
  },
  {
    id: "bl7",
    name: "Blue Pure Silk Cotton Printed Embroidery Blouse",
    image: "../assets/images/blouse-product/blouse2.jpg",
    price: "599",
    priceRange: "Under rs.1000",
    color: "Blue",
    category: "Embroidery",
    fabric: "Silk"
  },
  {
    id: "bl8",
    name: "Black Tie and Dye Leheriya Silk Cotton Blouse",
    image: "../assets/images/blouse-product/blouse3.jpg",
    price: "1100",
    priceRange: "rs. 1000-3000",
    color: "Black",
    category: "Tie-Die",
    fabric: "Silk"
  },
  {
    id: "bl9",
    name: "Off White Pure Cotton Embroidery Schiffli Blouse",
    image: "../assets/images/blouse-product/blouse4.jpg",
    price: "1200",
    priceRange: "rs. 1000-3000",
    color: "White",
    category: "Embroidery",
    fabric: "Cotton"
  },
  {
    id: "bl10",
    name: "Yellow Woven Viscose Blouse",
    image: "../assets/images/blouse-product/blouse5.jpg",
    price: "1000",
    priceRange: "rs. 1000-3000",
    color: "Yellow",
    category: "Woven",
    fabric: "Viscose"
  },
  {
    id: "bl11",
    name: "Beige Woven Pure Tussar Silk Blouse",
    image: "../assets/images/blouse-product/blouse1.jpg",
    price: "790",
    priceRange: "under rs.1000",
    color: "Beige",
    category: "Plain",
    fabric: "Silk"
  },
  {
    id: "bl12",
    name: "Blue Pure Silk Cotton Printed Embroidery Blouse",
    image: "../assets/images/blouse-product/blouse2.jpg",
    price: "599",
    priceRange: "Under rs.1000",
    color: "Blue",
    fabric: "Silk"
  },
  ];
  dressmaterials: any = [{
    id: 1,
    name: "Black cotton printed saree",
    image: "../assets/images/dress-material-product/dressm1.jpg",
    price: "4,999",
  },
  {
    id: 2,
    name: "Pink handloom printed saree",
    image: "../assets/images/dress-material-product/dressm2.jpg",
    price: "4,999",
  },
  {
    id: 3,
    name: "Orange plain banarasi saree",
    image: "../assets/images/dress-material-product/dressm3.jpg",
    price: "4,999",
  },
  {
    id: 4,
    name: "Pink pure silk  printed saree",
    image: "../assets/images/dress-material-product/dressm4.jpg",
    price: "4,999",
  },
  {
    id: 5,
    name: "Linen hand printed saree",
    image: "../assets/images/dress-material-product/dressm5.jpg",
    price: "4,999",
  },
  {
    id: 6,
    name: "Black cotton printed saree",
    image: "../assets/images/dress-material-product/dressm1.jpg",
    price: "4,999",
  },
  {
    id: 7,
    name: "Pink handloom printed saree",
    image: "../assets/images/dress-material-product/dressm2.jpg",
    price: "4,999",
  },
  {
    id: 8,
    name: "Orange plain banarasi saree",
    image: "../assets/images/dress-material-product/dressm3.jpg",
    price: "4,999",
  },
  {
    id: 9,
    name: "Pink pure silk  printed saree",
    image: "../assets/images/dress-material-product/dressm4.jpg",
    price: "4,999",
  },
  {
    id: 10,
    name: "Linen hand printed saree",
    image: "../assets/images/dress-material-product/dressm5.jpg",
    price: "4,999",
  },
  {
    id: 11,
    name: "Black cotton printed saree",
    image: "../assets/images/dress-material-product/dressm1.jpg",
    price: "4,999",
  },
  {
    id: 12,
    name: "Pink handloom printed saree",
    image: "../assets/images/dress-material-product/dressm2.jpg",
    price: "4,999",
  },
  ];
  kurtis: any = [{
    id: "k1",
    name: "Hand printed classic kurti set",
    image: "../../assets/images/kurti-product/kurti-1.jpg",
    price: "1,999",
    color: "Black"
  },
  {
    id: "k2",
    name: "Shiffon printed kurti",
    image: "../../assets/images/kurti-product/kurti-2.jpg",
    price: "2,999",
    color: "Blue"
  },
  {
    id: "k3",
    name: "Elegent hand work kurti",
    image: "../../assets/images/kurti-product/kurti-3.jpg",
    price: "1,599",
    color: "Red"
  },
  {
    id: "k4",
    name: "Kashmiri blue print kurti",
    image: "../../assets/images/kurti-product/kurti-4.jpg",
    price: "1,799",
    color: "Green"
  },
  {
    id: "k5",
    name: "Blue linen printed kurti",
    image: "../../assets/images/kurti-product/kurti-5.jpg",
    price: "999",
    color: "Blue"
  },
  {
    id: "k6",
    name: "Hand printed classic kurti set",
    image: "../../assets/images/kurti-product/kurti-1.jpg",
    price: "899",
    color: "Yellow"
  },
  {
    id: "k7",
    name: "Shiffon printed kurti",
    image: "../../assets/images/kurti-product/kurti-2.jpg",
    price: "1,979",
    color: "Brown"
  },
  {
    id: "k8",
    name: "Elegent hand work kurti",
    image: "../../assets/images/kurti-product/kurti-3.jpg",
    price: "1,699",
    color: "Purple"
  },
  {
    id: "k9",
    name: "Kashmiri blue print kurti",
    image: "../../assets/images/kurti-product/kurti-4.jpg",
    price: "1,399",
    color: "Pink"
  },
  {
    id: "k10",
    name: "Blue linen printed kurti",
    image: "../../assets/images/kurti-product/kurti-5.jpg",
    price: "1,299",
    color: "Blue"
  },
  {
    id: "k11",
    name: "Hand printed classic kurti set",
    image: "../../assets/images/kurti-product/kurti-1.jpg",
    price: "1,699",
    color: "White"
  },
  {
    id: "k12",
    name: "Shiffon printed kurti",
    image: "../../assets/images/kurti-product/kurti-2.jpg",
    price: "1,099",
    color: "Orange"
  },
  ];

  // cartProduct:any=[];

  // addToCart(product: any) {
  //   this.cartProduct.push(product); // Add the product to the cart array
  // }

  // kurtiProductCartdetail: any = [];
  // blouseProductCartdetail: any = [];
  // bagProductCartdetail:any =[]
  // sareeProductCartdetail: any = [];
  // dressProductCartdetail: any = [];

  // sendSareeToCart() {
  //   this.sareeProductCartdetail = this.sarees
  // }
  // sendDressmToCart() {
  //   this.dressProductCartdetail = this.dressmaterials
  // }
  // sendKurtiToCart() {
  //   this.kurtiProductCartdetail = this.kurtis
  // }
  // sendBlouseTocart() {
  //   this.blouseProductCartdetail = this.blouses
  // }
  // sendBagToCart() {
  //   this.bagProductCartdetail = this.bags
  // }
  // constructor() {
  //   console.log(this.sareeProductCartdetail);
  // }
}
