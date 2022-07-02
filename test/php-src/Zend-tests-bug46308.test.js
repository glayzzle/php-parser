// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug46308.phpt
  it("Bug #46308 (Invalid write when changing property from inside getter)", function () {
    expect(parser.parseCode("<?php\nclass main\n{\n   public static $dummy        = NULL ;\n   public static $dataAccessor = NULL ;\n}\nclass dataAccessor\n{\n}\nclass relay\n{\n   public function __get( $name )\n   {\n       main::$dataAccessor = new dataAccessor;\n   }\n}\nclass dummy\n{\n}\nmain::$dummy        = new dummy();\nmain::$dataAccessor = new relay();\nmain::$dataAccessor->bar;\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
