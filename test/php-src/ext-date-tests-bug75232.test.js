// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug75232.phpt
  it("Bug #75232: print_r of DateTime creating side-effect", function () {
    expect(parser.parseCode("<?php\n$d1 = DateTime::createFromFormat(\"Ymd\\THis\\Z\", '20170920T091600Z');\necho $d1->date, \"\\n\";\n$d2 = DateTime::createFromFormat(\"Ymd\\THis\\Z\", '20170920T091600Z');\nprint_r($d2);\necho $d2->date, \"\\n\";\n?>")).toMatchSnapshot();
  });
});
