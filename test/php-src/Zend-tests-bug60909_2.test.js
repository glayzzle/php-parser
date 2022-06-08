// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug60909_2.phpt
  it("Bug #60909 (custom error handler throwing Exception + fatal error = no shutdown function).", function () {
    expect(parser.parseCode("<?php\nregister_shutdown_function(function(){echo(\"\\n\\n!!!shutdown!!!\\n\\n\");});\nclass Bad {\n    public function __toString() {\n        throw new Exception('I CAN DO THIS');\n    }\n}\n$bad = new Bad();\necho \"$bad\";\n?>")).toMatchSnapshot();
  });
});
