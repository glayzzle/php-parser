// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/indirect_call_from_constant.phpt
  it("Indirect call with constants.", function () {
    expect(parser.parseCode("<?php\nclass Test\n{\n    public static function method()\n    {\n        echo \"Method called!\\n\";\n    }\n}\n['Test', 'method']();\n'Test::method'();\n(['Test', 'method'])();\n('Test::method')();\n?>")).toMatchSnapshot();
  });
});
