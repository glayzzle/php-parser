// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/autoload_020.phpt
  it("Ensure __autoload() is triggered during unserialization.", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function ($name) {\n  echo \"in autoload: $name\\n\";\n});\nvar_dump(unserialize('O:1:\"C\":0:{}'));\n?>")).toMatchSnapshot();
  });
});
