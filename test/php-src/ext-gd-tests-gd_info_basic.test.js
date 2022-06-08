// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/gd_info_basic.phpt
  it("gd_info()", function () {
    expect(parser.parseCode("<?php\n    echo \"basic test of gd_info() function\\n\";\n    var_dump(gd_info());\n    echo \"\\nDone\\n\";\n?>")).toMatchSnapshot();
  });
});
