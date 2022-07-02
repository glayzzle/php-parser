// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/indirect_method_call_004.phpt
  it("Indirect method call and cloning", function () {
    expect(parser.parseCode("<?php\nclass bar {\n    public $z;\n    public function __construct() {\n        $this->z = new stdclass;\n    }\n    public function getZ() {\n        return $this->z;\n    }\n}\nvar_dump(clone (new bar)->z);\nvar_dump(clone (new bar)->getZ());\n?>")).toMatchSnapshot();
  });
});
