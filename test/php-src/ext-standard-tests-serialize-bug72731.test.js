// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug72731.phpt
  it("Bug #72731: Type Confusion in Object Deserialization", function () {
    expect(parser.parseCode("<?php\nclass obj {\n    var $ryat;\n    function __wakeup() {\n        $this->ryat = 0x1122334455;\n    }\n}\n$poc = 'O:8:\"stdClass\":1:{i:0;O:3:\"obj\":1:{s:4:\"ryat\";R:1;}}';\nvar_dump(unserialize($poc));\n?>")).toMatchSnapshot();
  });
});
