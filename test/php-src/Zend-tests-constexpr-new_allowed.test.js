// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/constexpr/new_allowed.phpt
  it("Places where new is allowed", function () {
    expect(parser.parseCode("<?php\n#[SomeAttribute(new stdClass)]\nclass Test {\n    public function __construct(\n        public $prop = new stdClass,\n    ) {\n        var_dump($prop);\n    }\n}\nfunction test($param = new stdClass) {\n    static $var = new stdClass;\n    var_dump($param, $var);\n}\nconst TEST = new stdClass;\nnew Test;\ntest();\nvar_dump(TEST);\n?>")).toMatchSnapshot();
  });
});
