// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/006_error.phpt
  it("Test fileperms(), chmod() functions: error conditions", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing error conditions for fileperms(), chmod() ***\\n\";\n/* With standard files and dirs */\nvar_dump( chmod(\"/etc/passwd\", 0777) );\nprintf(\"%o\", fileperms(\"/etc/passwd\") );\necho \"\\n\";\nclearstatcache();\nvar_dump( chmod(\"/etc\", 0777) );\nprintf(\"%o\", fileperms(\"/etc\") );\necho \"\\n\";\nclearstatcache();\n/* With non-existing file or dir */\nvar_dump( chmod(\"/no/such/file/dir\", 0777) );\nvar_dump( fileperms(\"/no/such/file/dir\") );\necho \"\\n\";\necho \"\\n*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
