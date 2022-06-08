// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug54039.phpt
  it("Bug #54039 (use() of static variables in lambda functions can break staticness)", function () {
    expect(parser.parseCode("<?php\nfunction test_1() {\n    static $v = 0;\n    ++$v;\n    echo \"Outer function increments \\$v to $v\\n\";\n    $f = function() use($v) {\n        echo \"Inner function reckons \\$v is $v\\n\";\n    };\n    return $f;\n}\n$f = test_1(); $f();\n$f = test_1(); $f();\nfunction test_2() {\n    static $v = 0;\n    $f = function() use($v) {\n        echo \"Inner function reckons \\$v is $v\\n\";\n    };\n    ++$v;\n    echo \"Outer function increments \\$v to $v\\n\";\n    return $f;\n}\n$f = test_2(); $f();\n$f = test_2(); $f();\nfunction test_3() {\n    static $v = \"\";\n    $v .= 'b';\n    echo \"Outer function catenates 'b' onto \\$v to give $v\\n\";\n    $f = function() use($v) {\n        echo \"Inner function reckons \\$v is $v\\n\";\n    };\n    $v .= 'a';\n    echo \"Outer function catenates 'a' onto \\$v to give $v\\n\";\n    return $f;\n}\n$f = test_3(); $f();\n$f = test_3(); $f();\n?>")).toMatchSnapshot();
  });
});
