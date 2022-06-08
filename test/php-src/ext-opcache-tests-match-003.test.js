// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/match/003.phpt
  it("Match expression long jump table", function () {
    expect(parser.parseCode("<?php\nfunction test($char) {\n    return match ($char) {\n        1 => '1',\n        2, 3 => '2, 3',\n        4 => '4',\n        5, 6 => '5, 6',\n        7 => '7',\n        8, 9 => '8, 9',\n        default => 'default'\n    };\n}\nforeach (range(0, 10) as $char) {\n    var_dump(test($char));\n}\n?>")).toMatchSnapshot();
  });
});
