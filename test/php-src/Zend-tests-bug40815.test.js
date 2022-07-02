// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug40815.phpt
  it("Bug #40815 (using strings like \"class::func\" and static methods in set_exception_handler() might result in crash).", function () {
    expect(parser.parseCode("<?php\nclass ehandle{\n    static public function exh ($ex) {\n        echo 'foo';\n    }\n}\nset_exception_handler(\"ehandle::exh\");\nthrow new Exception (\"Whiii\");\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
