// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/calendar/tests/jdtogregorian.phpt
  it("jdtogregorian()", function () {
    expect(parser.parseCode("<?php\necho jdtogregorian(0). \"\\n\";\necho jdtogregorian(1). \"\\n\";\necho jdtogregorian(2298874). \"\\n\";\necho jdtogregorian(2299151). \"\\n\";\necho jdtogregorian(2440588). \"\\n\";\necho jdtogregorian(2816423). \"\\n\";\n?>")).toMatchSnapshot();
  });
});
