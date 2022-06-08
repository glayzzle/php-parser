// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/calendar/tests/gregoriantojd.phpt
  it("gregoriantojd()", function () {
    expect(parser.parseCode("<?php\necho gregoriantojd( 0, 0,    0). \"\\n\";\necho gregoriantojd( 1, 1, 1582). \"\\n\";\necho gregoriantojd(10, 5, 1582). \"\\n\";\necho gregoriantojd( 1, 1, 1970). \"\\n\";\necho gregoriantojd( 1, 1, 2999). \"\\n\";\necho gregoriantojd( 1, 1, -4714). \"\\n\";\necho gregoriantojd( 11, 24, -4714). \"\\n\";\n?>")).toMatchSnapshot();
  });
});
