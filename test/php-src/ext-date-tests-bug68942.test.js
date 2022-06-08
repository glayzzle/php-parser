// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug68942.phpt
  it("Bug #68942 (Use after free vulnerability in unserialize() with DateTimeZone).", function () {
    expect(parser.parseCode("<?php\n$data = unserialize('a:2:{i:0;O:12:\"DateTimeZone\":2:{s:13:\"timezone_type\";a:2:{i:0;i:1;i:1;i:2;}s:8:\"timezone\";s:1:\"A\";}i:1;R:4;}');\nvar_dump($data);\n?>")).toMatchSnapshot();
  });
});
