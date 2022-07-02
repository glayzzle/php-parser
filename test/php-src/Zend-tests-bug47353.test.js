// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug47353.phpt
  it("Bug #47353 (crash when creating a lot of objects in object destructor)", function () {
    expect(parser.parseCode("<?php\nclass A\n{\n    function __destruct()\n    {\n        $myArray = array();\n        for($i = 1; $i <= 3000; $i++) {\n            if(!isset($myArray[$i]))\n                $myArray[$i] = array();\n            $ref = & $myArray[$i];\n            $ref[] = new stdClass();\n        }\n    }\n}\n$a = new A();\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
