// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/umask_basic.phpt
  it("Test umask() function: basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing umask() : basic functionality ***\\n\";\n// checking umask() on all the modes\nfor($mask = 0000; $mask <= 0777; $mask++) {\n  echo \"-- Setting umask to $mask --\\n\";\n  var_dump( umask($mask) );\n  var_dump( umask() );\n  echo \"\\n\";\n  if ($mask != umask()) {\n    die('An error occurred while changing back the umask');\n  }\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
