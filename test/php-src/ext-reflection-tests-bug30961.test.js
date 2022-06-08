// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug30961.phpt
  it("Reflection Bug #30961 (Wrong linenumber in ReflectionClass getStartLine())", function () {
    expect(parser.parseCode("<?php\n    class a\n    {\n    }\n    class b extends a\n    {\n    }\n    $ref1 = new ReflectionClass('a');\n    $ref2 = new ReflectionClass('b');\n    echo $ref1->getStartLine() . \"\\n\";\n    echo $ref2->getStartLine() . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
