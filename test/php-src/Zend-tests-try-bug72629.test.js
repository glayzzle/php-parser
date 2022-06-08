// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/bug72629.phpt
  it("Bug #72629 (Caught exception assignment to variables ignores references)", function () {
    expect(parser.parseCode("<?php\n$var = null;\n$e = &$var;\ntry {\n    throw new Exception;\n} catch (Exception $e) { }\nvar_dump($var === $e);\n?>")).toMatchSnapshot();
  });
});
