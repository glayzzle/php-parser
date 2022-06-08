// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/observer_bug81430_1.phpt
  it("Bug #81430 (Attribute instantiation frame accessing invalid frame pointer)", function () {
    expect(parser.parseCode("<?php\n#[\\Attribute]\nclass A {\n    private $a;\n    public function __construct() {\n    }\n}\n#[A]\nfunction B() {}\n$r = new \\ReflectionFunction(\"B\");\ncall_user_func([$r->getAttributes(A::class)[0], 'newInstance']);\n?>")).toMatchSnapshot();
  });
});
