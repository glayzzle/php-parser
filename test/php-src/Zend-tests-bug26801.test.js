// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug26801.phpt
  it("Bug #26801 (switch ($a{0}) crash)", function () {
    expect(parser.parseCode("<?php\n$a = '11';\n$b = $a[0];\nswitch ($b) {\n    case '-':\n        break;\n}\n$a = '22';\nswitch ($a[0]) {\n    case '-':\n        break;\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
