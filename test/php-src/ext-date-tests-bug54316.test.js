// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug54316.phpt
  it("Bug #54316 (DateTime::createFromFormat does not handle trailing '|' correctly)", function () {
    expect(parser.parseCode("<?php\n$dt = DateTime::createFromFormat('Y-m-d|', '2011-02-02');\nvar_dump($dt);\n$dt = DateTime::createFromFormat('Y-m-d!', '2011-02-02');\nvar_dump($dt);\n?>")).toMatchSnapshot();
  });
});
