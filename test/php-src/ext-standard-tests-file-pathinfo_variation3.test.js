// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/pathinfo_variation3.phpt
  it("Test pathinfo() function : usage variation", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing pathinfo() : usage variation ***\\n\";\n$testfile = \"/usr/include/arpa/inet.h\";\nvar_dump(pathinfo(\"./\"));\nvar_dump(pathinfo(\"/.\"));\nvar_dump(pathinfo(\".cvsignore\"));\nvar_dump(pathinfo($testfile, PATHINFO_BASENAME));\nvar_dump(pathinfo($testfile, PATHINFO_FILENAME));\nvar_dump(pathinfo($testfile, PATHINFO_EXTENSION));\nvar_dump(pathinfo($testfile, PATHINFO_DIRNAME));\nvar_dump(pathinfo($testfile, PATHINFO_EXTENSION|PATHINFO_FILENAME|PATHINFO_DIRNAME));\nvar_dump(pathinfo($testfile, PATHINFO_EXTENSION|PATHINFO_FILENAME|PATHINFO_BASENAME));\nvar_dump(pathinfo($testfile, PATHINFO_EXTENSION|PATHINFO_FILENAME));\nvar_dump(pathinfo($testfile, PATHINFO_EXTENSION|PATHINFO_BASENAME));\nvar_dump(pathinfo($testfile, PATHINFO_FILENAME|PATHINFO_DIRNAME));\nvar_dump(pathinfo($testfile, PATHINFO_FILENAME|PATHINFO_BASENAME));\nvar_dump(pathinfo($testfile, PATHINFO_DIRNAME|PATHINFO_EXTENSION));\nvar_dump(pathinfo($testfile, PATHINFO_DIRNAME|PATHINFO_BASENAME));\n?>")).toMatchSnapshot();
  });
});
