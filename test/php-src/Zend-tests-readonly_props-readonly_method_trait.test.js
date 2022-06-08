// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/readonly_props/readonly_method_trait.phpt
  it("Method cannot be readonly in trait alias", function () {
    expect(() => parser.parseCode("<?php\nclass Test {\n    use T { foo as readonly; }\n}\n?>")).toThrowErrorMatchingSnapshot();
  });
});
