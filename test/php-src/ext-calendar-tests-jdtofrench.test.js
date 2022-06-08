// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/calendar/tests/jdtofrench.phpt
  it("jdtofrench()", function () {
    expect(parser.parseCode("<?php\necho jdtofrench(0). \"\\n\";\necho jdtofrench(2375840). \"\\n\";\necho jdtofrench(2375850). \"\\n\";\necho jdtofrench(2375940). \"\\n\";\necho jdtofrench(2376345). \"\\n\";\necho jdtofrench(2385940). \"\\n\";\n?>")).toMatchSnapshot();
  });
});
