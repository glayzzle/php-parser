// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/static_in_trait_insteadof_list.phpt
  it("Cannot use static in trait insteadof list", function () {
    expect(() => parser.parseCode("<?php\ntrait SomeTrait {\n    public function foobar() {}\n}\nclass Test {\n    use SomeTrait {\n        SomeTrait::foobar insteadof static;\n    }\n}\n?>")).toThrowErrorMatchingSnapshot();
  });
});
