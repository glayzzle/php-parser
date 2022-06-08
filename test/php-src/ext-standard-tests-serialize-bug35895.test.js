// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug35895.phpt
  it("Bug #35895 (__sleep and private property)", function () {
    expect(parser.parseCode("<?php\nclass Parents {\n   private $parents;\n   public function __sleep() {\n       return array(\"parents\");\n   }\n}\nclass Child extends Parents {\n    private $child;\n    public function __sleep() {\n        return array_merge(array(\"child\"), parent::__sleep());\n    }\n}\n$obj = new Child();\nserialize($obj);\n?>")).toMatchSnapshot();
  });
});
