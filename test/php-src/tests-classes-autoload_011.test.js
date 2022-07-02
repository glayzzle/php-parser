// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/autoload_011.phpt
  it("Ensure extends does trigger autoload.", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function ($name) {\n  echo \"In autoload: \";\n  var_dump($name);\n});\nclass C extends UndefBase\n{\n}\n?>")).toMatchSnapshot();
  });
});
