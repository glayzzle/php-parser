// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug34260.phpt
  it("Bug #34260 (Segfault with callbacks (array_map) + overloading)", function () {
    expect(parser.parseCode("<?php\nclass Faulty\n{\n    function __call($Method,$Args)\n    {\n        switch($Method)\n        {\n            case 'seg':\n              echo \"I hate me\\n\";\n            break;\n        }\n    }\n    function NormalMethod($Args)\n    {\n       echo \"I heart me\\n\";\n    }\n}\n$Faulty = new Faulty();\n$Array = array('Some junk','Some other junk');\n// This causes a seg fault.\n$Failure = array_map(array($Faulty,'seg'),$Array);\n// This does not.\n$Failure = array_map(array($Faulty,'NormalMethod'),$Array);\n?>")).toMatchSnapshot();
  });
});
