// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/explode_variation5.phpt
  it("Test explode() function : usage variations - positive and negative limits", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing explode() function: positive and negative limits ***\\n\";\n$str = 'one||two||three||four';\necho \"\\n-- positive limit --\\n\";\nvar_dump(explode('||', $str, 2));\necho \"\\n-- negative limit (since PHP 5.1) --\\n\";\nvar_dump(explode('||', $str, -1));\necho \"\\n-- negative limit (since PHP 5.1) with null string -- \\n\";\nvar_dump(explode('||', \"\", -1));\n?>")).toMatchSnapshot();
  });
});
