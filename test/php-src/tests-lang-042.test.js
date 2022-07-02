// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/042.phpt
  it("Dynamic access of constants", function () {
    expect(parser.parseCode("<?php\nclass A {\n    const B = 'foo';\n}\n$classname       =  'A';\n$wrongClassname  =  'B';\necho $classname::B.\"\\n\";\necho $wrongClassname::B.\"\\n\";\n?>\n===DONE===")).toMatchSnapshot();
  });
});
