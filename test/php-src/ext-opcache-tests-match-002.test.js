// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/match/002.phpt
  it("Test match jump table optimizer", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    $x = '2';\n    echo match($x) {\n        1, 2, 3, 4, 5 => throw new RuntimeException(),\n        default => \"No match\\n\",\n    };\n}\ntest();\nfunction test2() {\n    $x = 2;\n    echo match($x) {\n        '1', '2', '3', '4', '5' => throw new RuntimeException(),\n        default => \"No match\\n\",\n    };\n}\ntest2();\n?>")).toMatchSnapshot();
  });
});
