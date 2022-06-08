// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/readlink_realpath_error-win32.phpt
  it("Test readlink() and realpath() functions: error conditions", function () {
    expect(parser.parseCode("<?php\necho \"\\n*** Testing readlink() on a non-existent link ***\\n\";\nvar_dump( readlink(__DIR__.\"/readlink_error.tmp\") );\necho \"\\n*** Testing readlink() on existing file ***\\n\";\nvar_dump( readlink(__FILE__) );\necho \"\\n*** Testing readlink() on existing directory ***\\n\";\nvar_dump( readlink(__DIR__) );\necho \"\\n*** Testing realpath() on a non-existent file ***\\n\";\nvar_dump( realpath(__DIR__.\"/realpath_error.tmp\") );\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
