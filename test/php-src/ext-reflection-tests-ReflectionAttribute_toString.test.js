// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionAttribute_toString.phpt
  it("ReflectionAttribute::__toString", function () {
    expect(parser.parseCode("<?php\n#[Foo, Bar(a: \"foo\", b: 1234), Baz(\"foo\", 1234), X(NO_ERROR), Y(new stdClass)]\nfunction foo() {}\n$refl = new ReflectionFunction('foo');\necho $refl->getAttributes()[0];\necho $refl->getAttributes()[1];\necho $refl->getAttributes()[2];\necho $refl->getAttributes()[3];\necho $refl->getAttributes()[4];\n?>")).toMatchSnapshot();
  });
});
