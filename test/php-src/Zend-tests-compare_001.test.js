// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/compare_001.phpt
  it("comparing different variables for equality", function () {
    expect(parser.parseCode("<?php\nclass test {\n}\n$a = array(\n    array(1,2,3),\n    \"\",\n    1,\n    2.5,\n    0,\n    \"string\",\n    \"123\",\n    \"2.5\",\n    NULL,\n    true,\n    false,\n    new stdclass,\n    new stdclass,\n    new test,\n    array(),\n    -PHP_INT_MAX-1,\n    (string)(-PHP_INT_MAX-1),\n);\n$var_cnt = count($a);\nfunction my_dump($var) {\n    ob_start();\n    var_dump($var);\n    $buf = ob_get_clean();\n    echo str_replace(\"\\n\", \"\", $buf);\n}\nforeach($a as $var) {\n    for ($i = 0; $i < $var_cnt; $i++) {\n        my_dump($var);\n        echo ($var == $a[$i]) ? \" == \" : \" != \";\n        my_dump($a[$i]);\n        echo \"\\n\";\n    }\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
