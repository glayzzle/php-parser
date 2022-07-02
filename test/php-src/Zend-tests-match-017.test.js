// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/match/017.phpt
  it("Test strict comparison with match expression jump table", function () {
    expect(parser.parseCode("<?php\nfunction wrong() {\n    throw new Exception();\n}\nfunction test_int($char) {\n    return match ($char) {\n        0 => wrong(),\n        1 => wrong(),\n        2 => wrong(),\n        3 => wrong(),\n        4 => wrong(),\n        5 => wrong(),\n        6 => wrong(),\n        7 => wrong(),\n        8 => wrong(),\n        9 => wrong(),\n        default => 'Not matched',\n    };\n}\nforeach (range(0, 9) as $int) {\n    var_dump((string) $int);\n    var_dump(test_int((string) $int));\n}\nfunction test_string($int) {\n    return match ($int) {\n        '0' => wrong(),\n        '1' => wrong(),\n        '2' => wrong(),\n        '3' => wrong(),\n        '4' => wrong(),\n        '5' => wrong(),\n        '6' => wrong(),\n        '7' => wrong(),\n        '8' => wrong(),\n        '9' => wrong(),\n        default => 'Not matched',\n    };\n}\nforeach (range(0, 9) as $int) {\n    var_dump($int);\n    var_dump(test_string($int));\n}\n?>")).toMatchSnapshot();
  });
});
