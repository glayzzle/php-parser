// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/unset_cv11.phpt
  it("unset() CV 11 (unset() of copy destroys original value)", function () {
    expect(parser.parseCode("<?php\n$x = array(\"default\"=>\"ok\");\nvar_dump($x);\n$cf = $x;\nunset($cf['default']);\nvar_dump($x);\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
