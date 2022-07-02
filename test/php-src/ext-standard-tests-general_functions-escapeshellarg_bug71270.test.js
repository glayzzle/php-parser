// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/escapeshellarg_bug71270.phpt
  it("Test escapeshellarg() allowed argument length", function () {
    expect(parser.parseCode("<?php\nini_set('memory_limit', -1);\n$var_2  = str_repeat('A', 1024*1024*64);\nescapeshellarg($var_2);\n?>\n===DONE===")).toMatchSnapshot();
  });
});
