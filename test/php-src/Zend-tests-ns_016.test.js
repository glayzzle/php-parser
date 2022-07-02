// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_016.phpt
  it("016: Run-time name conflict and functions (ns name)", function () {
    expect(parser.parseCode("<?php\nnamespace test\\ns1;\nfunction strlen($x) {\n    return __FUNCTION__;\n}\n$x = \"test\\\\ns1\\\\strlen\";\necho $x(\"Hello\"),\"\\n\";\n?>")).toMatchSnapshot();
  });
});
