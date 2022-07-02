// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug24499.phpt
  it("Bug #24499 (bogus handling of a public property as a private one)", function () {
    expect(parser.parseCode("<?php\nclass Id {\n        private $id=\"priv\";\n        public function tester($obj)\n        {\n                $obj->id = \"bar\";\n        }\n}\n$id = new Id();\n$obj = new stdClass;\n$obj->foo = \"bar\";\n$id->tester($obj);\nprint_r($obj);\n?>")).toMatchSnapshot();
  });
});
