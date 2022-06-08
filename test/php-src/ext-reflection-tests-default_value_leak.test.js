// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/default_value_leak.phpt
  it("Check that isDefaultValueConstant() does not leak", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public function method($param = [123]) {}\n}\n$rp = new ReflectionParameter(['Test', 'method'], 'param');\nvar_dump($rp->isDefaultValueAvailable());\nvar_dump($rp->isDefaultValueConstant());\nvar_dump($rp->getDefaultValue());\n?>")).toMatchSnapshot();
  });
});
