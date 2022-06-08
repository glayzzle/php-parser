// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug41061.phpt
  it("Reflection Bug #41061 (\"visibility error\" in ReflectionFunction::__toString())", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n}\nclass bar {\n    private function foo() {\n    }\n}\necho new ReflectionFunction('foo'), \"\\n\";\necho new ReflectionMethod('bar', 'foo'), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
