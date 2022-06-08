// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug68942_2.phpt
  it("Bug #68942 (Use after free vulnerability in unserialize() with DateTime).", function () {
    expect(parser.parseCode("<?php\n$data = unserialize('a:2:{i:0;O:8:\"DateTime\":3:{s:4:\"date\";s:26:\"2000-01-01 00:00:00.000000\";s:13:\"timezone_type\";a:2:{i:0;i:1;i:1;i:2;}s:8:\"timezone\";s:1:\"A\";}i:1;R:5;}');\nvar_dump($data);\n?>")).toMatchSnapshot();
  });
});
