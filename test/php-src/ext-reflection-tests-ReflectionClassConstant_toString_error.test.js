// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClassConstant_toString_error.phpt
  it("Exception thrown while converting ReflectionClassConstant to string", function () {
    expect(parser.parseCode("<?php\nclass B {\n    const X = self::UNKNOWN;\n}\ntry {\n    echo new ReflectionClassConstant('B', 'X');\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
