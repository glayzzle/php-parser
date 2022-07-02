// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_082.phpt
  it("082: bracketed namespace with closing tag", function () {
    expect(parser.parseCode("<?php\nnamespace foo {\n}\nnamespace ok {\necho \"ok\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
