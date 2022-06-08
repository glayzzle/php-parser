// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/short_echo_as_identifier.phpt
  it("<?= cannot be used as an identifier", function () {
    expect(() => parser.parseCode("<?php\ntrait T {\n    public function x() {}\n}\nclass C {\n    use T {\n        x as y?><?= as my_echo;\n    }\n}\n?>")).toThrowErrorMatchingSnapshot();
  });
});
