// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/match/003.phpt
  it("Match expression default case", function () {
    expect(parser.parseCode("<?php\nfunction get_value($i) {\n    return match ($i) {\n        1 => 1,\n        2 => 2,\n        default => 'default',\n    };\n}\necho get_value(0) . \"\\n\";\necho get_value(1) . \"\\n\";\necho get_value(2) . \"\\n\";\necho get_value(3) . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
