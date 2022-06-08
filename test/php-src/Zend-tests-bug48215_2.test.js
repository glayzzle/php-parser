// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug48215_2.phpt
  it("Bug #48215 - parent::method() calls __construct, case sensitive test", function () {
    expect(parser.parseCode("<?php\nclass a {\n    public function __CONSTRUCT() { echo __METHOD__ . \"\\n\"; }\n    public function a() { echo __METHOD__ . \"\\n\"; }\n}\nclass b extends a {}\nclass c extends b {\n    function __construct() {\n        b::b();\n    }\n}\n$c = new c();\n?>\n===DONE===")).toMatchSnapshot();
  });
});
