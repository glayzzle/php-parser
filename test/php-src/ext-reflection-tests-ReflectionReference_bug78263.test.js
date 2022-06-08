// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionReference_bug78263.phpt
  it("Bug #78263: Handling of self-referential array special case", function () {
    expect(parser.parseCode("<?php\n// The case of a directly self-referential array is special and will\n// be treated as a proper reference despite rc=1 during array copying.\n$a = [&$a];\n$b = [$a];\nunset($a);\nvar_dump(ReflectionReference::fromArrayElement($b[0], 0));\n?>")).toMatchSnapshot();
  });
});
