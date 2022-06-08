// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/calendar/tests/juliantojd_overflow.phpt
  it("juliantojd()", function () {
    expect(parser.parseCode("<?php\necho juliantojd(5, 5, 6000000000) . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
