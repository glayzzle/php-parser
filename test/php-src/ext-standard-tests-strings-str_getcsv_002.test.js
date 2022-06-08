// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/str_getcsv_002.phpt
  it("str_getcsv() with empty $escape", function () {
    expect(parser.parseCode("<?php\n$contents = <<<EOS\n\"cell1\",\"cell2\\\\\",\"cell3\",\"cell4\"\nEOS;\nprint_r(str_getcsv($contents, ',', '\"', ''));\n?>")).toMatchSnapshot();
  });
});
