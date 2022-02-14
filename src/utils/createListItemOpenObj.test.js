import data from '../data/properties-data';
import createListItemOpenObj from './createListItemOpenObj';

describe("createListItemOpenObjTest", () => {
  it("should return the correct object based on what's passed in", () => {
    const expectedResult = {
      'Color-0': true,
      'Children-1': true,
      'Disabled-2': true,
      'Disablity focus ripple-3': true,
      'Disable ripple-4': true,
      'Full Width-5': true,
      'Mini-6': true,
      'New Property-7': true,
      'New Property-8': true,
      'Variant-9': true
    }
    const result = createListItemOpenObj(data);
    expect(JSON.stringify(result)).toBe(JSON.stringify(expectedResult));
  });
});