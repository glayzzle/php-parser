// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/autoload_007.phpt
  it("Ensure instanceof does not trigger autoload.", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function ($name) {\n  echo \"In autoload: \";\n  var_dump($name);\n});\n$a = new stdClass;\nvar_dump($a instanceof UndefC);\n?>")).toMatchSnapshot();
  });
});
