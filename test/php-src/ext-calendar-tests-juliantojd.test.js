// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/calendar/tests/juliantojd.phpt
  it("juliantojd()", function () {
    expect(parser.parseCode("<?php\necho juliantojd( 0, 0,    0). \"\\n\";\necho juliantojd( 1, 1, 1582). \"\\n\";\necho juliantojd(10, 5, 1582). \"\\n\";\necho juliantojd( 1, 1, 1970). \"\\n\";\necho juliantojd( 1, 1, 2999). \"\\n\";\necho juliantojd( 1, 1, -4713). \"\\n\";\n?>")).toMatchSnapshot();
  });
});
