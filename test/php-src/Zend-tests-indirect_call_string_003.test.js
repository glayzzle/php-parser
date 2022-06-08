// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/indirect_call_string_003.phpt
  it("Dynamic static call to instance method should throw.", function () {
    expect(parser.parseCode("<?php\nclass TestClass\n{\n    private $test;\n    public function method()\n    {\n        $this->test = 'test';\n        return \"Hello, world!\\n\";\n    }\n}\n$callback = 'TestClass::method';\necho $callback();\n?>")).toMatchSnapshot();
  });
});
