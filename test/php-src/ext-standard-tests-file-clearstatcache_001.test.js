// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/clearstatcache_001.phpt
  it("clearstatcache() optional parameters", function () {
    expect(parser.parseCode("<?php\n@rmdir(__FILE__ . \"_dir1\");\n@rmdir(__FILE__ . \"_dir2\");\n@unlink(__FILE__ . \"_link1\");\n@unlink(__FILE__ . \"_link2\");\nmkdir(__FILE__ . \"_dir1\");\nmkdir(__FILE__ . \"_dir2\");\nsymlink(__FILE__ . \"_link1\", __FILE__ . \"_link2\");\nsymlink(__FILE__ . \"_dir1\", __FILE__ . \"_link1\");\nvar_dump(realpath(__FILE__ . \"_link2\"));\npassthru(\"rm -f \" . escapeshellarg(__FILE__ . \"_link1\"));\nvar_dump(realpath(__FILE__ . \"_link2\"));\nclearstatcache(false);\nvar_dump(realpath(__FILE__ . \"_link2\"));\nclearstatcache(true, \"/foo/bar\");\nvar_dump(realpath(__FILE__ . \"_link2\"));\nclearstatcache(true, __FILE__ . \"_link2\");\nclearstatcache(true, __FILE__ . \"_link1\");\nvar_dump(realpath(__FILE__ . \"_link2\"));\n@rmdir(__FILE__ . \"_dir1\");\n@rmdir(__FILE__ . \"_dir2\");\n@unlink(__FILE__ . \"_link1\");\n@unlink(__FILE__ . \"_link2\");\n?>")).toMatchSnapshot();
  });
});
