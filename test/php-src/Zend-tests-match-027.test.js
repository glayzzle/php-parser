// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/match/027.phpt
  it("Test result of match cannot be modified by reference", function () {
    expect(parser.parseCode("<?php\n// opcache can't be certain Test::usesRef is actually this method\nif (!class_exists('Test')) {\n    class Test {\n        public static function usesRef(&$x) {\n            $x = 'modified';\n        }\n        public static function usesValue($x) {\n            echo \"usesValue $x\\n\";\n        }\n    }\n}\nfunction main() {\n    $i = 0;\n    Test::usesValue(match(true) { true => $i });\n    echo \"i is $i\\n\";\n    $j = 1;\n    Test::usesRef(match(true) { true => $j });\n    echo \"j is $j\\n\";\n}\nmain();\n?>")).toMatchSnapshot();
  });
});
