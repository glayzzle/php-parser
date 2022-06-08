// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionMethod_defaultArg.phpt
  it("ReflectionMethod and RECV_INIT (bug #70957 and #70958)", function () {
    expect(parser.parseCode("<?php\nAbstract class F {\n    private function bar($a = self::class) {}\n}\nTrait T\n{\n    private function bar($a = self::class) {}\n}\nclass B {\n    use T;\n}\necho new \\ReflectionMethod('F', 'bar');\necho new \\ReflectionMethod('T', 'bar');\necho new \\ReflectionMethod('B', 'bar');\n?>")).toMatchSnapshot();
  });
});
