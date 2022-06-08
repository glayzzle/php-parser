// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug73052.phpt
  it("Bug #73052: Memory Corruption in During Deserialized-object Destruction", function () {
    expect(parser.parseCode("<?php\nclass obj {\n    var $ryat;\n    public function __destruct() {\n        $this->ryat = null;\n    }\n}\n$poc = 'O:3:\"obj\":1:{';\nvar_dump(unserialize($poc));\n?>")).toMatchSnapshot();
  });
});
