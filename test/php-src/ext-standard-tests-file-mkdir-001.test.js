// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/mkdir-001.phpt
  it("mkdir() tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(mkdir(\"mkdir-001\"));\nvar_dump(mkdir(\"mkdir-001/subdir\"));\nvar_dump(rmdir(\"mkdir-001/subdir\"));\nvar_dump(rmdir(\"mkdir-001\"));\nvar_dump(mkdir(\"./mkdir-001\"));\nvar_dump(mkdir(\"./mkdir-001/subdir\"));\nvar_dump(rmdir(\"./mkdir-001/subdir\"));\nvar_dump(rmdir(\"./mkdir-001\"));\nvar_dump(mkdir(__DIR__.\"/mkdir-001\"));\nvar_dump(mkdir(__DIR__.\"/mkdir-001/subdir\"));\nvar_dump(rmdir(__DIR__.\"/mkdir-001/subdir\"));\nvar_dump(rmdir(__DIR__.\"/mkdir-001\"));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
