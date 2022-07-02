// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/match/002.phpt
  it("Match expression omit trailing comma", function () {
    expect(parser.parseCode("<?php\nfunction print_bool($bool) {\n    echo match ($bool) {\n        true => \"true\\n\",\n        false => \"false\\n\"\n    };\n}\nprint_bool(true);\nprint_bool(false);\n?>")).toMatchSnapshot();
  });
});
