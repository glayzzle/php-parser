// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug14561.phpt
  it("Bug #14561 (strtotime() bug)", function () {
    expect(parser.parseCode("<?php\necho strtotime(\"19:30 Dec 17 2005\"), \"\\n\";\necho strtotime(\"Dec 17 19:30 2005\"), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
