// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/006_basic.phpt
  it("Test fileperms() & chmod() functions: basic functionality", function () {
    expect(parser.parseCode("<?php\n$path = __DIR__;\necho \"*** Testing fileperms(), chmod() with files and dirs ***\\n\";\nfopen($path.\"/perm.tmp\", \"w\");\nvar_dump( chmod($path.\"/perm.tmp\", 0755 ) );\nprintf(\"%o\", fileperms($path.\"/perm.tmp\") );\necho \"\\n\";\nclearstatcache();\nmkdir($path.\"/perm\");\nvar_dump( chmod( $path.\"/perm\", 0777 ) );\nprintf(\"%o\", fileperms($path.\"/perm\") );\necho \"\\n\";\nclearstatcache();\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
