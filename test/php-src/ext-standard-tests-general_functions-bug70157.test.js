// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug70157.phpt
  it("parse_ini_string() crashes on values starting with number or unquoted strings", function () {
    expect(parser.parseCode("<?php\n$contents = <<<EOS\n[agatha.christie]\ntitle = 10 little indians\nfoo[123] = E_ALL & ~E_DEPRECATED\nfoo[456] = 123\nEOS;\nvar_dump(parse_ini_string($contents, false, INI_SCANNER_TYPED));\n?>\nDone")).toMatchSnapshot();
  });
});
