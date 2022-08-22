/**  Definition of an item. */
import {ItemAttributeSet} from "./ItemAttributeSet";
import {Unit} from "./Unit";

type ItemValues = {
  gtin: string
  name: string
  productImageUrl: string
  content: number
  unit: Unit
}

class Item {

  /**  Global Trade Item Number, see https://en.wikipedia.org/wiki/Global_Trade_Item_Number */
  gtin: string
  name: string
  /** URL of the product image */
  productImageUrl: string
  /**  Numerical content of one product, e.g. 1. The parameter "unit" is necessary to interpret this parameter. */
  content: number
  /** Unit of the contents of one product, e.g. "kg" */
  unit: Unit
  itemSet: ItemAttributeSet[]

  constructor({gtin, name, productImageUrl, content, unit}: ItemValues ) {
    this.gtin = gtin;
    this.name = name;
    this.productImageUrl = productImageUrl;
    this.content = content;
    this.unit = unit;
    this.itemSet = [];
  }

  contentString() {
    return `${this.content} ${this.unit}`;
  }

  addSet(count: number, expires: Date) {
    this.itemSet.push({ count, expires });
  }

  getNumberOfItemSets(): number {
    return this.itemSet.length;
  }

  getItemSet(i: number): ItemAttributeSet {
    return this.itemSet[i];
  }

  getCount(): number {
    return this.itemSet.reduce((accumulatedValue, currentSet) => {
      return accumulatedValue + currentSet.count;
    }, 0);
  }

  clearItemSet(): void {
    this.itemSet = [];
  }
}

export default Item;
