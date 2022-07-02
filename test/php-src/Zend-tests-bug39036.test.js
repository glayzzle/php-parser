// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug39036.phpt
  it("Bug #39036 (Unsetting key of foreach() yields segmentation fault)", function () {
    expect(parser.parseCode("<?php\n$key = 'asdf';\nforeach (get_defined_vars() as $key => $value) {\n    unset($$key);\n}\nvar_dump($key);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
