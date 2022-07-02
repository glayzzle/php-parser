// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/match/007.phpt
  it("Match expression exception on unhandled case", function () {
    expect(parser.parseCode("<?php\nfunction get_value($i) {\n    return match ($i) {\n        1 => 1,\n        2 => 2,\n    };\n}\necho get_value(1) . \"\\n\";\necho get_value(2) . \"\\n\";\necho get_value(3) . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
