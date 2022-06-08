// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/dir/readdir_variation7.phpt
  it("Test readdir() function : usage variations - use file pointers", function () {
    expect(parser.parseCode("<?php\n/*\n * Open a file pointer using fopen and pass to readdir() to test behaviour\n */\necho \"*** Testing readdir() : usage variations ***\\n\";\n// get a resource variable\nvar_dump($fp = fopen(__FILE__, \"r\"));\ntry {\n    var_dump( readdir($fp) );\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
