// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tidy/tests/009.phpt
  it("tidy_doc object overloading", function () {
    expect(parser.parseCode("<?php\n    $a = tidy_parse_string(\"<HTML></HTML>\");\n    echo $a;\n?>")).toMatchSnapshot();
  });
});
