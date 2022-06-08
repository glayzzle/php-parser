// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug72598.phpt
  it("Bug #72598 (Reference is lost after array_slice())", function () {
    expect(parser.parseCode("<?php\nfunction ref(&$ref) {\n    var_dump($ref);\n}\nnew class {\n        function __construct() {\n                $args = [&$this];\n                for ($i = 0; $i < 2; $i++) {\n                        $a = array_slice($args, 0, 1);\n                        call_user_func_array('ref', $a);\n                }\n        }\n};\n?>")).toMatchSnapshot();
  });
});
