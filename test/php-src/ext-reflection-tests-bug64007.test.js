// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug64007.phpt
  it("Bug #64007 (There is an ability to create instance of Generator by hand)", function () {
    expect(parser.parseCode("<?php\n$reflection = new ReflectionClass('Generator');\ntry {\n    $generator = $reflection->newInstanceWithoutConstructor();\n    var_dump($generator);\n} catch (Exception $e) {\n    var_dump($e->getMessage());\n}\n$generator  = $reflection->newInstance();\nvar_dump($generator);\n?>")).toMatchSnapshot();
  });
});
