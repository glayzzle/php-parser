// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/sccp_036.phpt
  it("SCCP 036: NAN handling", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $y=NAN;\n    for(;x;)for(;$y=1;);\n}\n?>\nDONE")).toMatchSnapshot();
  });
});
