// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug72598_2.phpt
  it("Bug #72598.2 (Reference is lost after array_slice())", function () {
    expect(parser.parseCode("<?php\nfunction ref(&$ref) {\n    var_dump($ref);\n    $ref = 1;\n}\nnew class {\n        function __construct() {\n        $b = 0;\n                $args = [&$b];\n        unset($b);\n                for ($i = 0; $i < 2; $i++) {\n                        $a = array_slice($args, 0, 1);\n                        call_user_func_array('ref', $a);\n                }\n        }\n};\n?>")).toMatchSnapshot();
  });
});
