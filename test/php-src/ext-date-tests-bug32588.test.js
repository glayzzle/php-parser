// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug32588.phpt
  it("Bug #32588 (strtotime() error for 'last xxx' DST problem)", function () {
    expect(parser.parseCode("<?php\necho date('D Y/m/d/H:i:s', strtotime('last saturday', 1112703348)). \"\\n\";\necho date('D Y/m/d/H:i:s', strtotime(\"last sunday\", 1112703348)). \"\\n\";\necho date('D Y/m/d/H:i:s', strtotime('last monday', 1112703348)). \"\\n\";\n?>")).toMatchSnapshot();
  });
});
