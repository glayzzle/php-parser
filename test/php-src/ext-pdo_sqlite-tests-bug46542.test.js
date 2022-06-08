// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_sqlite/tests/bug46542.phpt
  it("Bug #46542 Extending PDO class with a __call() function", function () {
    expect(parser.parseCode("<?php\nclass A extends PDO\n{ function __call($m, $p) {print __CLASS__.\"::$m\\n\";} }\n$a = new A('sqlite:' . __DIR__ . '/dummy.db');\n$a->truc();\n$a->TRUC();\n?>")).toMatchSnapshot();
  });
});
