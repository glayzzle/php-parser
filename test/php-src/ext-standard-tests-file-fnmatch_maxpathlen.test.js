// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fnmatch_maxpathlen.phpt
  it("Test fnmatch() function : warning filename or pattern exceeds maxpathlen", function () {
    expect(parser.parseCode("<?php\n$longstring = str_pad('blah', PHP_MAXPATHLEN);\nvar_dump(fnmatch('blah', $longstring));\nvar_dump(fnmatch($longstring, 'blah'));\n?>")).toMatchSnapshot();
  });
});
