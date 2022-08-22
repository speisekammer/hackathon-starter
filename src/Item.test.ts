import ExampleItems from "./ExampleItems";

test('item count is working correctly', () => {
  expect(ExampleItems[0].getCount()).toBe(10);
  expect(ExampleItems[1].getCount()).toBe(1);
  expect(ExampleItems[2].getCount()).toBe(2);
});

test('number of item sets is working correctly', () => {
  expect(ExampleItems[0].getNumberOfItemSets()).toBe(3);
  expect(ExampleItems[1].getNumberOfItemSets()).toBe(1);
  expect(ExampleItems[2].getNumberOfItemSets()).toBe(2);
});

test('adding an item set is working correctly', () => {
  ExampleItems[0].clearItemSet();
  expect(ExampleItems[0].getNumberOfItemSets()).toBe(0);
  ExampleItems[0].addSet(1, new Date());
  expect(ExampleItems[0].getNumberOfItemSets()).toBe(1);
});
