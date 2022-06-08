// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_013.phpt
  it("013: Name conflict and functions (ns name)", function () {
    expect(parser.parseCode("<?php\nnamespace test\\ns1;\nfunction strlen($x) {\n    return __FUNCTION__;\n}\necho strlen(\"Hello\"),\"\\n\";\n?>")).toMatchSnapshot();
  });
});
