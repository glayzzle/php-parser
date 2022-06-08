// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/calendar/tests/jdtojulian.phpt
  it("jdtojulian()", function () {
    expect(parser.parseCode("<?php\necho jdtojulian(0). \"\\n\";\necho jdtojulian(1). \"\\n\";\necho jdtojulian(2298874). \"\\n\";\necho jdtojulian(2299151). \"\\n\";\necho jdtojulian(2440588). \"\\n\";\necho jdtojulian(2816423). \"\\n\";\n?>")).toMatchSnapshot();
  });
});
