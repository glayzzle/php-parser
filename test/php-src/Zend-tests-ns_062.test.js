// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_062.phpt
  it("062: use \\global class", function () {
    expect(parser.parseCode("<?php\nnamespace Foo;\nuse \\stdClass;\nuse \\stdClass as A;\necho get_class(new stdClass).\"\\n\";\necho get_class(new A).\"\\n\";\n?>")).toMatchSnapshot();
  });
});
