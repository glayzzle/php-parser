// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/sccp_035.phpt
  it("SCCP 035: memory leak", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n  $obj = new stdClass;\n  $obj->$b = ~$b = $a='';\n  $obj->$a--;\n}\n?>\nDONE")).toMatchSnapshot();
  });
});
