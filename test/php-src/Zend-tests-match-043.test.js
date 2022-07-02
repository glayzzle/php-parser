// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/match/043.phpt
  it("Match expression error messages", function () {
    expect(parser.parseCode("<?php\nclass Beep {}\nfunction test(mixed $var) {\n    try {\n        match($var) {};\n    } catch (UnhandledMatchError $e) {\n        print $e->getMessage() . PHP_EOL;\n    }\n}\ntest(null);\ntest(1);\ntest(5.5);\ntest(5.0);\ntest(\"foo\");\ntest(true);\ntest(false);\ntest([1, 2, 3]);\ntest(new Beep());\n// Testing long strings.\ntest(str_repeat('e', 100));\ntest(str_repeat(\"e\\n\", 100));\n?>")).toMatchSnapshot();
  });
});
