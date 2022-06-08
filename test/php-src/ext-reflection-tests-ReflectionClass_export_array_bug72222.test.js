// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_export_array_bug72222.phpt
  it("ReflectionClass::__toString() - array constants", function () {
    expect(parser.parseCode("<?php\nClass A {\n    const A = 8;\n    const B = [\"a\", \"b\"];\n}\necho new ReflectionClass(\"A\"), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
