// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug47254.phpt
  it("Bug #47254", function () {
    expect(parser.parseCode("<?php\nclass A\n{\n    protected function a() {}\n}\nclass B extends A\n{\n    public function b() {}\n}\n$B = new B();\n$R = new ReflectionObject($B);\n$m = $R->getMethods();\nprint_r($m);\n?>")).toMatchSnapshot();
  });
});
