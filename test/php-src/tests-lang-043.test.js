// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/043.phpt
  it("Dynamic call for static methods", function () {
    expect(parser.parseCode("<?php\nclass A {\n    static function foo() { return 'foo'; }\n}\n$classname       =  'A';\n$wrongClassname  =  'B';\necho $classname::foo().\"\\n\";\necho $wrongClassname::foo().\"\\n\";\n?>\n===DONE===")).toMatchSnapshot();
  });
});
