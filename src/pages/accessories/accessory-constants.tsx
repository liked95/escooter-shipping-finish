interface IAccessoryItemProps {
  imageSource: string;
  alt: string;
  name: string;
  features: string[];
}

export const accessoryItems: IAccessoryItemProps[] = [
  {
    imageSource:
      "https://cdn.shopify.com/s/files/1/0619/5527/6963/products/9350759102540-kaabo-wolf-warrior-handlebar-bag_1.png?v=1664336834",
    alt: "Mountains",
    name: " WaterProof bag",
    features: [
      "Durable, Lightweight Material",
      "Extra Storage Space",
      "Trendy and Stylish Design",
      "Price: 50 AUD"
    ]
  },
  {
    imageSource: "https://m.media-amazon.com/images/I/61CggHW5OEL.jpg",
    alt: "Lights",
    name: " Cable Lock/ET461",
    features: [
      "Security Level 4",
      "A 15mm x 150mm thickened spiral cable with heatproof",
      "Weight: 570 grams",
      "Price: 40 AUD"
    ]
  },
  {
    imageSource:
      "https://scooterstop.com.au/wp-content/uploads/Cortex-Helmet-Conform-Multi-Sport-side-Matte-Black-Scooter-Stop-12.jpg",
    alt: "Nature",
    name: "Cortex Helmet",
    features: [
      "Include 4 sets of pads",
      "Certified multi and high impact",
      "Safety and confort for users",
      "Price: 30 AUD"
    ]
  },
  {
    imageSource:
      "https://cdn.shopify.com/s/files/1/0619/5527/6963/products/Black_2160x.jpg?v=1664335801",
    alt: "Mountains",
    name: "Phone Holder",
    features: [
      "Material: silicone pads",
      "Can hold most 4 to 7 inch phones",
      "Easy to install on your handle",
      "Price: 60 AUD"
    ]
  }
];
