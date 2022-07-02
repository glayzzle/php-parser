// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug42802.phpt
  it("Bug #42802 (Namespace not supported in types)", function () {
    expect(parser.parseCode("<?php\nnamespace foo;\nclass bar {\n}\nfunction test1(bar $bar) {\n    echo \"ok\\n\";\n}\nfunction test2(\\foo\\bar $bar) {\n        echo \"ok\\n\";\n}\nfunction test3(\\foo\\bar $bar) {\n        echo \"ok\\n\";\n}\nfunction test4(\\Exception $e) {\n    echo \"ok\\n\";\n}\nfunction test5(\\bar $bar) {\n        echo \"bug\\n\";\n}\n$x = new bar();\n$y = new \\Exception();\ntest1($x);\ntest2($x);\ntest3($x);\ntest4($y);\ntest5($x);\n?>")).toMatchSnapshot();
  });
});
