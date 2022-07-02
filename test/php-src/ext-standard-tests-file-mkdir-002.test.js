// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/mkdir-002.phpt
  it("mkdir(dir, 0777) tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(mkdir(\"mkdir-002\", 0777));\nvar_dump(mkdir(\"mkdir-002/subdir\", 0777));\nvar_dump(`ls -l mkdir-002`);\nvar_dump(rmdir(\"mkdir-002/subdir\"));\nvar_dump(rmdir(\"mkdir-002\"));\nvar_dump(mkdir(\"./mkdir-002\", 0777));\nvar_dump(mkdir(\"./mkdir-002/subdir\", 0777));\nvar_dump(`ls -l ./mkdir-002`);\nvar_dump(rmdir(\"./mkdir-002/subdir\"));\nvar_dump(rmdir(\"./mkdir-002\"));\nvar_dump(mkdir(__DIR__.\"/mkdir-002\", 0777));\nvar_dump(mkdir(__DIR__.\"/mkdir-002/subdir\", 0777));\n$dirname = __DIR__.\"/mkdir-002\";\nvar_dump(`ls -l $dirname`);\nvar_dump(rmdir(__DIR__.\"/mkdir-002/subdir\"));\nvar_dump(rmdir(__DIR__.\"/mkdir-002\"));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
