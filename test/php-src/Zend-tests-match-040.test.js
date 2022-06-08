// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/match/040.phpt
  it("Test match with mixed int/string jumptable", function () {
    expect(parser.parseCode("<?php\nfunction test($value) {\n    echo match ($value) {\n        1 => '1 int',\n        '1' => '1 string',\n        2 => '2 int',\n        '2' => '2 string',\n        3 => '3 int',\n        '3' => '3 string',\n        4 => '4 int',\n        '4' => '4 string',\n        5 => '5 int',\n        '5' => '5 string',\n    };\n    echo \"\\n\";\n}\ntest(1);\ntest('1');\ntest(2);\ntest('2');\ntest(3);\ntest('3');\ntest(4);\ntest('4');\ntest(5);\ntest('5');\n?>")).toMatchSnapshot();
  });
});
