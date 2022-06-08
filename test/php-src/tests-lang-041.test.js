// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/041.phpt
  it("Dynamic access of static members", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public    static $b = 'foo';\n}\n$classname       =  'A';\n$wrongClassname  =  'B';\necho $classname::$b.\"\\n\";\necho $wrongClassname::$b.\"\\n\";\n?>\n===DONE===")).toMatchSnapshot();
  });
});
