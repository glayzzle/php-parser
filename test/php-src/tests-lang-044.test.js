// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/044.phpt
  it("Dynamic call for static methods dynamically named", function () {
    expect(parser.parseCode("<?php\nclass A {\n    static function foo() { return 'foo'; }\n}\n$classname        =  'A';\n$wrongClassname   =  'B';\n$methodname       =  'foo';\necho $classname::$methodname().\"\\n\";\necho $wrongClassname::$methodname().\"\\n\";\n?>\n===DONE===")).toMatchSnapshot();
  });
});
