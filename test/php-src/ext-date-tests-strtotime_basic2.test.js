// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/strtotime_basic2.phpt
  it("strtotime() with return false", function () {
    expect(parser.parseCode("<?php\nvar_dump(strtotime('mayy 2 2009')); // misspelled month name\n?>")).toMatchSnapshot();
  });
});
