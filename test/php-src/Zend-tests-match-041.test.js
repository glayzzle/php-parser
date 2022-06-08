// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/match/041.phpt
  it("Match expression with trailing comma in condition list", function () {
    expect(parser.parseCode("<?php\nfunction print_bool($bool) {\n    echo match ($bool) {\n        false,\n        0,\n            => \"false\\n\",\n        true,\n        1,\n            => \"true\\n\",\n        default,\n            => \"not bool\\n\",\n    };\n}\nprint_bool(false);\nprint_bool(0);\nprint_bool(true);\nprint_bool(1);\nprint_bool(2);\nprint_bool('foo');\n?>")).toMatchSnapshot();
  });
});
