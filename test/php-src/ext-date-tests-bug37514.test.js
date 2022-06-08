// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug37514.phpt
  it("Bug #37514 (strtotime doesn't assume year correctly).", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('UTC');\necho date('r', strtotime('May 18th 5:05', 1168156376)), \"\\n\";\necho date('r', strtotime('May 18th 5:05pm', 1168156376)), \"\\n\";\necho date('r', strtotime('May 18th 5:05 pm', 1168156376)), \"\\n\";\necho date('r', strtotime('May 18th 5:05am', 1168156376)), \"\\n\";\necho date('r', strtotime('May 18th 5:05 am', 1168156376)), \"\\n\";\necho date('r', strtotime('May 18th 2006 5:05pm', 1168156376)), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
