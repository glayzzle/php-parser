// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug41884.phpt
  it("Bug #41884 (ReflectionClass::getDefaultProperties() does not handle static attributes)", function () {
    expect(parser.parseCode("<?php\nclass Foo\n{\n    protected static $fooStatic = 'foo';\n    protected $foo = 'foo';\n}\n$class = new ReflectionClass('Foo');\nvar_dump($class->getDefaultProperties());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
