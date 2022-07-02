// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/named_params/attributes_named_flags_incorrect.phpt
  it("Named flags parameter for Attribute attribute (incorrect parameter name)", function () {
    expect(parser.parseCode("<?php\n// TODO: This should error at compile-time.\n#[Attribute(not_flags: Attribute::TARGET_CLASS)]\nclass MyAttribute {\n}\n#[MyAttribute]\nfunction test() {}\n(new ReflectionFunction('test'))->getAttributes()[0]->newInstance();\n?>")).toMatchSnapshot();
  });
});
