// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/inter_007.phpt
  it("Trying inherit abstract function twice", function () {
    expect(parser.parseCode("<?php\ninterface d {\n    static function B();\n}\ninterface c {\n    function b();\n}\nclass_alias('c', 'w');\ninterface a extends d, w { }\n?>")).toMatchSnapshot();
  });
});
