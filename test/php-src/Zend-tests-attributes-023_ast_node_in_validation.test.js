// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/attributes/023_ast_node_in_validation.phpt
  it("Attribute flags value is validated.", function () {
    expect(parser.parseCode("<?php\n#[Attribute(Foo::BAR)]\nclass A1 { }\n?>")).toMatchSnapshot();
  });
});
