// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/010.phpt
  it("ReflectionMethod::__toString() tests (overridden method)", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    function func() {\n    }\n}\nclass Bar extends Foo {\n    function func() {\n    }\n}\n$m = new ReflectionMethod(\"Bar::func\");\necho $m;\n?>")).toMatchSnapshot();
  });
});
