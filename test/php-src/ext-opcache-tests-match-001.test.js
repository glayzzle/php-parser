// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/match/001.phpt
  it("Match expression string jump table", function () {
    expect(parser.parseCode("<?php\nfunction test($char) {\n    return match ($char) {\n        'a' => 'a',\n        'b', 'c' => 'b, c',\n        'd' => 'd',\n        'e', 'f' => 'e, f',\n        'g' => 'g',\n        'h', 'i' => 'h, i',\n    };\n}\nforeach (range('a', 'i') as $char) {\n    var_dump(test($char));\n}\n?>")).toMatchSnapshot();
  });
});
