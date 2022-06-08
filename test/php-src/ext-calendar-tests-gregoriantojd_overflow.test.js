// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/calendar/tests/gregoriantojd_overflow.phpt
  it("gregoriantojd()", function () {
    expect(parser.parseCode("<?php\necho gregoriantojd(5, 5, 6000000) . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
