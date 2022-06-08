// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug72663_3.phpt
  it("Bug #72663: Create an Unexpected Object and Don't Invoke __wakeup() in Deserialization", function () {
    expect(parser.parseCode("<?php\nclass obj {\n    var $ryat;\n    function __wakeup() {\n        $this->ryat = str_repeat('A', 0x112);\n    }\n}\n$poc = 'O:8:\"stdClass\":1:{i:0;O:3:\"obj\":1:{s:4:\"ryat\";R:1;';\nunserialize($poc);\n?>\nDONE")).toMatchSnapshot();
  });
});
