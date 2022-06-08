// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_firebird/tests/connect.phpt
  it("PDO_Firebird: connect/disconnect", function () {
    expect(parser.parseCode("<?php\n    require(\"testdb.inc\");\n    unset($dbh);\n    echo \"done\\n\";\n?>")).toMatchSnapshot();
  });
});
