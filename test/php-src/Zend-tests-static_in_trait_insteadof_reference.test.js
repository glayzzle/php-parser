// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/static_in_trait_insteadof_reference.phpt
  it("Cannot use static in trait insteadof method reference", function () {
    expect(parser.parseCode("<?php\ntrait SomeTrait {\n    public function foobar() {}\n}\nclass Test {\n    use SomeTrait {\n        static::foobar insteadof SomeTrait;\n    }\n}\n?>")).toMatchSnapshot();
  });
});
