// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/calendar/tests/frenchtojd.phpt
  it("frenchtojd()", function () {
    expect(parser.parseCode("<?php\necho frenchtojd(-1,-1,-1), \"\\n\";\necho frenchtojd(0,0,0), \"\\n\";\necho frenchtojd(1,1,1), \"\\n\";\necho frenchtojd(14,31,15), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
