// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug49047.phpt
  it("Test fopen() function : variation: interesting paths, no use include path", function () {
    expect(parser.parseCode("<?php\n// fopen with interesting windows paths.\n$testdir = __DIR__ . '/bug47177.tmpdir';\nmkdir($testdir);\n$t = time() - 3600;\ntouch($testdir, $t);\nclearstatcache();\n$t2 = filemtime($testdir);\nif ($t2 != $t) echo \"failed (got $t2, expecting $t)\\n\";\nrmdir($testdir);\necho \"Ok.\";\n?>")).toMatchSnapshot();
  });
});
