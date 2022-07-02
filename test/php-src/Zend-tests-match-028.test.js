// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/match/028.phpt
  it("Test result of match cannot be modified by reference", function () {
    expect(parser.parseCode("<?php\n// opcache can't be certain Test::usesRef is actually this method\nif (!class_exists('Test')) {\n    class Test {\n        public static function usesRef(&$x) {\n            $x = 'modified';\n        }\n        public static function usesValue($x) {\n            echo \"usesValue $x\\n\";\n        }\n    }\n}\nfunction main(int $i): int {\n    Test::usesValue(match(true) { true => $i });\n    Test::usesValue(match($i) { 42 => $i });\n    var_dump($i);\n    Test::usesRef(match(true) { true => $i });\n    var_dump($i);\n}\ntry {\n    main(42);\n} catch (Error $e) {\n    printf(\"Caught %s\\n\", $e->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
