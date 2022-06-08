// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/calendar/tests/jewishtojd.phpt
  it("jewishtojd()", function () {
    expect(parser.parseCode("<?php\necho jewishtojd(-1,-1,-1). \"\\n\";\necho jewishtojd(0,0,0). \"\\n\";\necho jewishtojd(1,1,1). \"\\n\";\necho jewishtojd(2,22,5763). \"\\n\";\n?>")).toMatchSnapshot();
  });
});
