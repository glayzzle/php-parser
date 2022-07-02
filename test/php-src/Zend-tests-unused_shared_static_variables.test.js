// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/unused_shared_static_variables.phpt
  it("Cleanup of shared static variables HT that has never been used should not assert", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public function test() {\n        static $x;\n    }\n}\nclass B extends A {}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
