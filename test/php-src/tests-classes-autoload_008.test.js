// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/autoload_008.phpt
  it("Ensure catch blocks for unknown exception types do not trigger autoload.", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function ($name) {\n  echo \"In autoload: \";\n  var_dump($name);\n});\nfunction f()\n{\n  throw new Exception();\n}\ntry {\n  f();\n}\ncatch (UndefC $u) {\n  echo \"In UndefClass catch block.\\n\";\n}\ncatch (Exception $e) {\n  echo \"In Exception catch block. Autoload should not have been triggered.\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
