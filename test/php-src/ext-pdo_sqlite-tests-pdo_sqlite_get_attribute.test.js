// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_sqlite/tests/pdo_sqlite_get_attribute.phpt
  it("PDO_sqlite: Testing getAttribute()", function () {
    expect(parser.parseCode("<?php\n$pdo = new PDO('sqlite::memory:');\nvar_dump($pdo->getAttribute(PDO::ATTR_SERVER_VERSION));\nvar_dump($pdo->getAttribute(PDO::ATTR_CLIENT_VERSION));\n?>")).toMatchSnapshot();
  });
});
