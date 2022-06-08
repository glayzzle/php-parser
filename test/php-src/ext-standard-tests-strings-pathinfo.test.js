// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/pathinfo.phpt
  it("pathinfo() tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(pathinfo(\"\"));\nvar_dump(pathinfo(\".\"));\nvar_dump(pathinfo(\"..\"));\nvar_dump(pathinfo(\"/\"));\nvar_dump(pathinfo(\"./\"));\nvar_dump(pathinfo(\"/.\"));\nvar_dump(pathinfo(\".cvsignore\"));\nvar_dump(pathinfo(__FILE__, PATHINFO_BASENAME));\nvar_dump(pathinfo(__FILE__, PATHINFO_FILENAME));\nvar_dump(pathinfo(__FILE__, PATHINFO_EXTENSION));\nvar_dump(pathinfo(__FILE__, PATHINFO_DIRNAME));\nvar_dump(pathinfo(__FILE__, PATHINFO_EXTENSION|PATHINFO_FILENAME|PATHINFO_DIRNAME));\nvar_dump(pathinfo(__FILE__, PATHINFO_EXTENSION|PATHINFO_FILENAME|PATHINFO_BASENAME));\nvar_dump(pathinfo(__FILE__, PATHINFO_EXTENSION|PATHINFO_FILENAME));\nvar_dump(pathinfo(__FILE__, PATHINFO_EXTENSION|PATHINFO_BASENAME));\nvar_dump(pathinfo(__FILE__, PATHINFO_FILENAME|PATHINFO_DIRNAME));\nvar_dump(pathinfo(__FILE__, PATHINFO_FILENAME|PATHINFO_BASENAME));\nvar_dump(pathinfo(__FILE__, PATHINFO_DIRNAME|PATHINFO_EXTENSION));\nvar_dump(pathinfo(__FILE__, PATHINFO_DIRNAME|PATHINFO_BASENAME));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
