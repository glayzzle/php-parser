// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug65006.phpt
  it("Bug #65006: spl_autoload_register fails with multiple callables using self, same method", function () {
    expect(parser.parseCode("<?php\nclass first {\n    public static function init() {\n        spl_autoload_register(array('self','load'));\n    }\n    public static function load($class) {}\n}\nclass second {\n    public static function init() {\n        spl_autoload_register(array('self','load'));\n    }\n    public static function load($class){}\n}\nfirst::init();\nsecond::init();\nvar_dump(spl_autoload_functions());\n?>")).toMatchSnapshot();
  });
});
