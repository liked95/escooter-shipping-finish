interface IScooter {
  type: "air-balance" | "electric-kick" | "seated-electric-scooter";
  imageSource: string;
  alt?: string;
  name: string;
  features: string[];
}

export const initScooters: IScooter[] = [
  {
    type: "air-balance",
    imageSource:
      "https://www.australiahoverboards.com.au/wp-content/uploads/2018/10/mini-segway-with-handle-0-1-1-500x500.jpg",
    alt: "Mountains",
    name: "Hoverboard Self Balancing Scooter with Handle – Black.",
    features: [
      "Max Travel Distance: 20Km",
      "Max Speed: 18km/h",
      "Max Load: 120kg",
      "Price = 800 AUD"
    ]
  },

  {
    type: "air-balance",
    imageSource:
      "https://cdn.shopify.com/s/files/1/0558/1104/7579/products/H3286c692d68a4095bc9e351447411dcaO.jpg?v=1634857095",
    alt: "Mountains",
    name: "Apollo Ghost 2022 Hydraulic Brakes",
    features: [
      "Max Travel Distance: 30km",
      "Max Speed: 80km/h",
      "Max Load: 1000kg",
      "Price: 4,599 AUD"
    ]
  },

  {
    type: "air-balance",
    imageSource:
      "https://cdn.shopify.com/s/files/1/0491/4531/5484/products/HX-Phantom-Race-Infographics-Static1-2000-2000-v1.jpg?v=1669059177",
    alt: "Lights",
    name: 'HX Phantom Race-Fastest 8.5" Hoverboard With Handle',
    features: [
      "Max Travel Distance: 10km",
      "Max Speed: 30km/h",
      "Max Load: 19kg",
      "Price: 600 AUD"
    ]
  },

  {
    type: "electric-kick",
    imageSource:
      "https://cdn.shopify.com/s/files/1/0034/7504/6445/products/ApolloGhostelectricscooter_1078x1078.png?v=1672957386",
    alt: "Nature",
    name: "Apollo Ghost 2022 Hydraulic Brakes",
    features: [
      "Max Travel Distance: 63km",
      "Max Speed: 60km/h",
      "Max Load: 29kg",
      "Price: 2,299 AUD"
    ]
  },

  {
    type: "electric-kick",
    imageSource:
      "https://cdn.shopify.com/s/files/1/0034/7504/6445/products/Dualtron_Thunder_2_front_1200x1200.jpg?v=1654142312",
    alt: "Nature",
    name: "Dualtron Thunder 2 Electric Scooter",
    features: [
      "Max Travel Distance: 130km",
      "Max Speed: 105km/h",
      "Max Load: 47kg",
      "Price: 5,677 AUD"
    ]
  },

  {
    type: "electric-kick",
    imageSource:
      "https://www.mytopia.com.au/media/catalog/product/t/r/trnscobula6bk.jpg?optimize=medium&fit=bounds&height=660&width=720&canvas=720:660",
    alt: "Nature",
    name: "BULLET Black 48V 1000W Turbo Folding Scooter",
    features: [
      "Max Travel Distance: 35km",
      "Max Speed: 50km/h",
      "Max Load: 100kg",
      "Price: 1,999 AUD"
    ]
  },

  {
    type: "seated-electric-scooter",
    imageSource:
      "https://cdn.shopify.com/s/files/1/0034/7504/6445/products/emove-roadrunner-seated-scooter-full_1000x1000.jpg?v=1646797670",
    alt: "People",
    name: "Hiboy S2 Pro Electric Scooter Seated",
    features: [
      "Max Travel Distance: 45km",
      "Max Speed: 30.5km/h",
      "Max Load: 100kg",
      "Price: 2,690 AUD"
    ]
  },

  {
    type: "seated-electric-scooter",
    imageSource:
      "https://cdn.shopify.com/s/files/1/0034/7504/6445/products/emove-roadrunner-seated-scooter-full_1000x1000.jpg?v=1646797670",
    alt: "People",
    name: "EMove Roadrunner Seated Electric Scooter",
    features: [
      "Max Travel Distance: 80km",
      "Max Speed: 55km/h",
      "Max Load: 120kg",
      "Price: 2,690 AUD"
    ]
  },

  {
    type: "seated-electric-scooter",
    imageSource:
      "https://cdn.shopify.com/s/files/1/0034/7504/6445/products/fiido-q1-seated-electric-scooter-black_5771e491-3061-4511-8849-29d654dbbcfd_800x800.jpg?v=1650510567",
    alt: "People",
    name: "Stingray FS1000 Fat Mini High Powered E Scooter",
    features: [
      "Max Travel Distance: 25km",
      "Max Speed: 50km/h",
      "Max Load: 120kg",
      "Price: 699 AUD"
    ]
  }
];
