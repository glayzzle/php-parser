// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug73154.phpt
  it("Bug #73154: serialize object with __sleep function crash", function () {
    expect(parser.parseCode("<?php\nclass a {\n    public $a;\n    public function __sleep() {\n        $this->a=null;\n        return array();\n    }\n}\n$s = 'a:1:{i:0;O:1:\"a\":1:{s:1:\"a\";R:2;}}';\nvar_dump(serialize(unserialize($s)));\n?>")).toMatchSnapshot();
  });
});
