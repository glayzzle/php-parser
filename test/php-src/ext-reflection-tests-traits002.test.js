// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/traits002.phpt
  it("ReflectionClass and Traits", function () {
    expect(parser.parseCode("<?php\nabstract class foo {\n}\ntrait bar {\n}\necho new ReflectionClass('foo'), \"\\n\";\necho new ReflectionClass('bar'), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
