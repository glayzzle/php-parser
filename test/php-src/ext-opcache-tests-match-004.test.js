// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/match/004.phpt
  it("Match expression mixed jump table", function () {
    expect(parser.parseCode("<?php\nfunction test($value) {\n    return match ($value) {\n        1 => '1 int',\n        '1' => '1 string',\n        2 => '2 int',\n        '2' => '2 string',\n        3 => '3 int',\n        '3' => '3 string',\n        4 => '4 int',\n        '4' => '4 string',\n        5 => '5 int',\n        '5' => '5 string',\n        default => 'default',\n    };\n}\nforeach (range(0, 6) as $number) {\n    var_dump(test($number));\n    var_dump(test((string) $number));\n}\n?>")).toMatchSnapshot();
  });
});
