// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_083.phpt
  it("083: bracketed namespace with junk before the ns declaration", function () {
    expect(parser.parseCode("<?php\n$a = 'oops';\necho $a;\nnamespace foo {\n}\nnamespace ok {\necho \"ok\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
