// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/traits001.phpt
  it("ReflectionClass and Traits", function () {
    expect(parser.parseCode("<?php\ntrait Foo {\n    public function someMethod() { }\n}\nclass Bar {\n    use Foo;\n    public function someOtherMethod() { }\n}\n$rFoo = new ReflectionClass('Foo');\n$rBar = new ReflectionClass('Bar');\nvar_dump($rFoo->isTrait());\nvar_dump($rBar->isTrait());\necho $rFoo;\necho $rBar;\n?>")).toMatchSnapshot();
  });
});
