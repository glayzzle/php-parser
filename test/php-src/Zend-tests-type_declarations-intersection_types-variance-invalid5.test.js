// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/intersection_types/variance/invalid5.phpt
  it("Replacing iterable type with non-Traversable intersection type", function () {
    expect(parser.parseCode("<?php\ninterface X {}\ninterface Y {}\nclass Test {\n    function method(): iterable {}\n}\nclass Test2 extends Test {\n    function method(): X&Y {}\n}\n?>")).toMatchSnapshot();
  });
});
