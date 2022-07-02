// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_077_3.phpt
  it("077: Unknown compile-time constants in namespace", function () {
    expect(parser.parseCode("<?php\nnamespace foo;\nfunction foo($a = array(namespace\\unknown => unknown))\n{\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
