// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug69806.phpt
  it("Bug #69806 (Incorrect date from timestamp)", function () {
    expect(parser.parseCode("<?php\nini_set('date.timezone', 'America/New_York');\necho date('Y-m-d H:i:s', 2377224000).\"\\n\";\n?>")).toMatchSnapshot();
  });
});
