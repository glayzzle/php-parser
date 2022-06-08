// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMAttr_value_basic_001.phpt
  it("Read empty $value.", function () {
    expect(parser.parseCode("<?php\n$attr = new DOMAttr('category');\nprint $attr->value.\"\\n\";\n?>\n===DONE===")).toMatchSnapshot();
  });
});
