// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/observer_bug81430_2.phpt
  it("Bug #81430 (Attribute instantiation leaves dangling execute_data pointer)", function () {
    expect(parser.parseCode("<?php\n#[\\Attribute]\nclass A {\n    public function __construct() {\n        array_map(\"str_repeat\", [\"\\xFF\"], [100000000]); // cause a bailout\n    }\n}\n#[A]\nfunction B() {}\n$r = new \\ReflectionFunction(\"B\");\ncall_user_func([$r->getAttributes(A::class)[0], 'newInstance']);\n?>")).toMatchSnapshot();
  });
});
