// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_017.phpt
  it("017: Run-time name conflict and functions (php name)", function () {
    expect(parser.parseCode("<?php\nnamespace test\\ns1;\nfunction strlen($x) {\n    return __FUNCTION__;\n}\n$x = \"strlen\";\necho $x(\"Hello\"),\"\\n\";\n?>")).toMatchSnapshot();
  });
});
