import Item from "./Item";

// Define some example products. Data is taken from openfoodfacts.org
const ExampleItems = [
  new Item({
    gtin: "4003586104892",
    name: "Kessel Chips Cross Cut Ranch",
    productImageUrl:
      "https://static.openfoodfacts.org/images/products/400/358/610/4892/front_de.16.100.jpg",
    content: 120,
    unit: "g",
  }),
  new Item({
    gtin: "5000328237503",
    name: "Salsa picante frasco",
    productImageUrl:
      "https://static.openfoodfacts.org/images/products/500/032/823/7503/front_fr.41.100.jpg",
    content: 326,
    unit: "g",
  }),
  new Item({
    gtin: "4029764001807",
    name: "CLUB-MATE",
    productImageUrl:
      "https://static.openfoodfacts.org/images/products/402/976/400/1807/front_de.110.100.jpg",
    content: 500,
    unit: "ml",
  }),
  new Item({
    gtin: "4305615678474",
    name: "Bananen Chips",
    productImageUrl:
      "https://static.openfoodfacts.org/images/products/430/561/567/8474/front_en.5.100.jpg",
    content: 150,
    unit: "g",
  }),
];

// Add some expiration dates
ExampleItems[0].clearItemSet();
ExampleItems[0].addSet(5, new Date());
ExampleItems[0].addSet(2, new Date("August 19, 2019 23:15:30"));
ExampleItems[0].addSet(3, new Date("December 24, 2020 20:15:00"));

ExampleItems[1].clearItemSet();
ExampleItems[1].addSet(1, new Date("September 01, 2020 20:15:30"));

ExampleItems[2].clearItemSet();
ExampleItems[2].addSet(1, new Date("August 01, 2020 20:15:30"));
ExampleItems[2].addSet(1, new Date("March 01, 2021 20:15:30"));

ExampleItems[3].clearItemSet();
ExampleItems[3].addSet(20, new Date("January 18, 2018 20:01:30"));
ExampleItems[3].addSet(18, new Date("February 12, 2018 12:15:30"));

export default ExampleItems;
