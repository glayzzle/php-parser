// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/preload_prop_info_table.phpt
  it("Preloading of the property info table with internal parent", function () {
    expect(parser.parseCode("<?php\n$e = new MyException(\"foo\");\necho $e->getMessage(), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
