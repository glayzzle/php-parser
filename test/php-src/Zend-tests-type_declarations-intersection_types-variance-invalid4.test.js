// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/intersection_types/variance/invalid4.phpt
  it("Replacing object type with not-loadable intersection type", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    function method(): object {}\n}\nclass Test2 extends Test {\n    function method(): X&Y {}\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
