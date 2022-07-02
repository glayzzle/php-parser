// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/match/044.phpt
  it("Incorrect cfg block marking for two arm match", function () {
    expect(parser.parseCode("<?php\n$x = 2;\nvar_dump(match ($x) {\n    2,2 => 'x',\n    default => 'y',\n});\n?>")).toMatchSnapshot();
  });
});
