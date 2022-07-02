// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/match/042.phpt
  it("Match expression with undefined variable as expression", function () {
    expect(parser.parseCode("<?php\nvar_dump(match ($undefinedVariable) {\n    null => 'null',\n    default => 'default',\n});\nvar_dump(match ($undefinedVariable) {\n    1, 2, 3, 4, 5 => 'foo',\n    default => 'bar',\n});\n?>")).toMatchSnapshot();
  });
});
