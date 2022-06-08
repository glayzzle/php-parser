// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_firebird/tests/bug_80521.phpt
  it("Bug #80521 (Parameters with underscores no longer recognized)", function () {
    expect(parser.parseCode("<?php\nrequire 'testdb.inc';\n$dbh->exec(\"CREATE TABLE bug80521 (foo INTEGER)\");\nvar_dump($dbh->prepare(\"SELECT foo FROM bug80521 WHERE foo = :foo_bar\"));\n?>")).toMatchSnapshot();
  });
});
