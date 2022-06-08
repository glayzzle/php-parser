// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMAttr_value_basic_002.phpt
  it("Write non-string $value property", function () {
    expect(parser.parseCode("<?php\n$attr = new DOMAttr('category');\n$attr->value = 1;\nprint $attr->value;\n?>")).toMatchSnapshot();
  });
});
