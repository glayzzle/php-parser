// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/methods-on-non-objects-usort.phpt
  it("usort() in combination with \"Call to a member function method() on null\"", function () {
    expect(parser.parseCode("<?php\nset_error_handler(function($code, $message) {\n  var_dump($code, $message);\n});\n$comparator= null;\n$list= [1, 4, 2, 3, -1];\nusort($list, function($a, $b) use ($comparator) {\n  try {\n      return $comparator->compare($a, $b);\n  } catch (Error $e) {\n      var_dump($e->getCode(), $e->getMessage());\n      return 0;\n  }\n});\nvar_dump($list);\necho \"Alive\\n\";\n?>")).toMatchSnapshot();
  });
});
