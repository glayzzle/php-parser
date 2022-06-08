// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug33578.phpt
  it("Bug #33578 (strtotime() doesn't parse \"11 Oct\" format\")", function () {
    expect(parser.parseCode("<?php\n    date_default_timezone_set(\"UTC\");\n    echo date('m/d/Y', strtotime('Oct 11')), \"\\n\";\n    echo date('m/d/Y', strtotime('11 Oct')), \"\\n\";\n    echo date('m/d/Y', strtotime('11 Oct 2005')), \"\\n\";\n    echo date('m/d/Y', strtotime('Oct11')), \"\\n\";\n    echo date('m/d/Y', strtotime('11Oct')), \"\\n\";\n    echo date('m/d/Y', strtotime('11Oct 2005')), \"\\n\";\n    echo date('m/d/Y', strtotime('11Oct2005')), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
