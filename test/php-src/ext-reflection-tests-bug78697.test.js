// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug78697.phpt
  it("Bug #78697: ReflectionClass::implementsInterface - inaccurate error message with traits", function () {
    expect(parser.parseCode("<?php\ntrait T {}\ntry {\n    (new ReflectionClass(new stdClass))->implementsInterface(T::class);\n} catch (ReflectionException $e) {\n    echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
