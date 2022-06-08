// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug44069.phpt
  it("Bug #44069 (Huge memory usage with concatenation using . instead of .=)", function () {
    expect(parser.parseCode("<?php\n$array = array();\n$newstring = \"\";\n$string = str_repeat('This is a teststring.', 50);\nfor($i = 1; $i <= 2000; $i++)\n{\n//\t$newstring .= $string; //This uses an expected amount of mem.\n    $newstring = $newstring . $string; //This uses very much mem.\n    for($j = 1; $j <= 10; $j++)\n    {\n        $array[] = 'test';\n    }\n}\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
