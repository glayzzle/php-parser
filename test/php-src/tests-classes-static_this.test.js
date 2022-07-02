// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/static_this.phpt
  it("ZE2 $this can be an argument to a static function", function () {
    expect(parser.parseCode("<?php\nclass TestClass\n{\n    function __construct()\n    {\n        self::Test1();\n        $this->Test1();\n    }\n    static function Test1()\n    {\n        var_dump($this);\n    }\n    static function Test2($this)\n    {\n        var_dump($this);\n    }\n}\n$obj = new TestClass;\nTestClass::Test2(new stdClass);\n?>\n===DONE===")).toMatchSnapshot();
  });
});
