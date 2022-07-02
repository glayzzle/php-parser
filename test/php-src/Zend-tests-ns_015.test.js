// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_015.phpt
  it("015: Name conflict and functions (php name in case if ns name exists)", function () {
    expect(parser.parseCode("<?php\nnamespace test\\ns1;\nfunction strlen($x) {\n    return __FUNCTION__;\n}\necho \\strlen(\"Hello\"),\"\\n\";\n?>")).toMatchSnapshot();
  });
});
