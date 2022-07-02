// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/increment_001.phpt
  it("incrementing different variables", function () {
    expect(parser.parseCode("<?php\n$a = array(\n    array(1,2,3),\n    \"\",\n    1,\n    2.5,\n    0,\n    \"string\",\n    \"123\",\n    \"2.5\",\n    NULL,\n    true,\n    false,\n    new stdclass,\n    array(),\n    PHP_INT_MAX,\n    (string)PHP_INT_MAX\n);\nforeach ($a as $var) {\n    try {\n        $var++;\n    } catch (TypeError $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n    var_dump($var);\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
