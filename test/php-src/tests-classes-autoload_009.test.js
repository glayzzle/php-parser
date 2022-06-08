// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/autoload_009.phpt
  it("Ensure type hints for unknown types do not trigger autoload.", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function ($name) {\n  echo \"In autoload: \";\n  var_dump($name);\n});\nfunction f(UndefClass $x)\n{\n}\nf(new stdClass);\n?>")).toMatchSnapshot();
  });
});
