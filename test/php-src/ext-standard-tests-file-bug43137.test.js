// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug43137.phpt
  it("Bug #43137 (rmdir() and rename() do not clear statcache)", function () {
    expect(parser.parseCode("<?php\n    $toname = \"TO_\" . md5(microtime());\n    $dirname = \"FROM_\" . md5(microtime());\n    mkdir($dirname);\n    var_dump(is_dir($dirname)); // Expected: true\n    rename($dirname, $toname);\n    var_dump(is_dir($dirname)); // Expected: false\n    var_dump(is_dir($toname)); // Expected: true\n    rmdir($toname);\n    var_dump(is_dir($toname)); // Expected: false\n?>")).toMatchSnapshot();
  });
});
