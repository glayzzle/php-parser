// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/bug_77849_2.phpt
  it("PDO Common: Bug #77849 (inconsistent state of cloned statament object)", function () {
    expect(parser.parseCode("<?php\n$stmt = new PDOStatement();\nclone $stmt;\n?>")).toMatchSnapshot();
  });
});
