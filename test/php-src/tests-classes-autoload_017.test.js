// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/autoload_017.phpt
  it("Ensure ReflectionClass::implementsInterface triggers autoload.", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function ($name) {\n  echo \"In autoload: \";\n  var_dump($name);\n});\n$rc = new ReflectionClass(\"stdClass\");\ntry {\n  $rc->implementsInterface(\"UndefI\");\n} catch (ReflectionException $e) {\n  echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
