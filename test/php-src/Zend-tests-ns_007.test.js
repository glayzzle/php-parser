// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_007.phpt
  it("007: Run-time name conflict (php name)", function () {
    expect(parser.parseCode("<?php\nnamespace test\\ns1;\nclass Exception {\n}\n$x = \"Exception\";\necho get_class(new $x),\"\\n\";\n?>")).toMatchSnapshot();
  });
});
