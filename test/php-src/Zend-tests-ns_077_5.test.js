// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_077_5.phpt
  it("077: Unknown compile-time constants in namespace", function () {
    expect(parser.parseCode("<?php\nfunction foo($a = array(0 => \\unknown))\n{\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
