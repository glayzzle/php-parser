// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_sqlite/tests/bug60104.phpt
  it("Bug #60104 (Segmentation Fault in pdo_sqlite when using sqliteCreateFunction())", function () {
    expect(parser.parseCode("<?php\nfunction setUp()\n{\n    $handler = new PDO( \"sqlite::memory:\" );\n    $handler->sqliteCreateFunction( \"md5\", \"md5\", 1 );\n    unset( $handler );\n}\nsetUp();\nsetUp();\necho \"done\";\n?>")).toMatchSnapshot();
  });
});
