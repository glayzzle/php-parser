// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_077_8.phpt
  it("077: Unknown compile-time constants in namespace", function () {
    expect(parser.parseCode("<?php\nfunction foo($a = array(namespace\\unknown => unknown))\n{\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
