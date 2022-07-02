// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/autoload_010.phpt
  it("Ensure implements does trigger autoload.", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function ($name) {\n  echo \"In autoload: \";\n  var_dump($name);\n});\nclass C implements UndefI\n{\n}\n?>")).toMatchSnapshot();
  });
});
