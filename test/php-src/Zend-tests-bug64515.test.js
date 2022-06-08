// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug64515.phpt
  it("Bug #64515 (Memoryleak when using the same variablename 2times in function declaration) (PHP7)", function () {
    expect(parser.parseCode("<?php\nfunction foo($unused = null, $unused = null, $arg = array()) {\n        return 1;\n}\nfoo();\necho \"okey\";\n?>")).toMatchSnapshot();
  });
});
