// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug76770.phpt
  it("Bug #76770 'U' modifier in 'datetime::createFromFormat' adds seconds to other specifiers", function () {
    expect(parser.parseCode("<?php\nvar_dump(datetime::createFromFormat('U H', '3600 01')->getTimestamp());\n?>")).toMatchSnapshot();
  });
});
