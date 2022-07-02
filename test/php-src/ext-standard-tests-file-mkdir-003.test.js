// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/mkdir-003.phpt
  it("recursive mkdir() tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(mkdir(\"mkdir-003/subdir\", 0777, true));\nvar_dump(rmdir(\"mkdir-003/subdir\"));\nvar_dump(rmdir(\"mkdir-003\"));\nvar_dump(mkdir(\"./mkdir-003/subdir\", 0777, true));\nvar_dump(rmdir(\"./mkdir-003/subdir\"));\nvar_dump(rmdir(\"./mkdir-003\"));\nvar_dump(mkdir(__DIR__.\"/mkdir-003/subdir\", 0777, true));\nvar_dump(rmdir(__DIR__.\"/mkdir-003/subdir\"));\nvar_dump(rmdir(__DIR__.\"/mkdir-003\"));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
