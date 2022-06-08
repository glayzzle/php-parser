// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/autoload_013.phpt
  it("Ensure the ReflectionClass constructor triggers autoload.", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function ($name) {\n  echo \"In autoload: \";\n  var_dump($name);\n});\ntry {\n  new ReflectionClass(\"UndefC\");\n}\ncatch (ReflectionException $e) {\n  echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
