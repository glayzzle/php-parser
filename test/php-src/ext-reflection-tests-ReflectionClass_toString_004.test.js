// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_toString_004.phpt
  it("Constant evaluation exception during ReflectionClass::__toString()", function () {
    expect(parser.parseCode("<?php\nclass A {\n    const C = self::UNKNOWN;\n}\ntry {\n    echo new ReflectionClass(A::class);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
