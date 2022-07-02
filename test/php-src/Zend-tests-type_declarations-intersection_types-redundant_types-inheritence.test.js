// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/intersection_types/redundant_types/inheritence.phpt
  it("Intersection with child class", function () {
    expect(parser.parseCode("<?php\nclass A {}\nclass B extends A {}\nfunction test(): A&B {\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
