// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMAttr_name_basic_001.phpt
  it("DOMAttr read $name property.", function () {
    expect(parser.parseCode("<?php\n$attr = new DOMAttr('category', 'books');\nprint $attr->name;\n?>")).toMatchSnapshot();
  });
});
