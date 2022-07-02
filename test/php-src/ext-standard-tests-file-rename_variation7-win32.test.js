// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/rename_variation7-win32.phpt
  it("Test rename() function: usage variations-8", function () {
    expect(parser.parseCode("<?php\n$tmp_link = __FILE__.\".tmp.link\";\n$tmp_link2 = __FILE__.\".tmp.link2\";\nif (symlink(__DIR__.\"/there_is_no_such_file\", $tmp_link)) {\n    rename($tmp_link, $tmp_link2);\n}\nclearstatcache();\nvar_dump(readlink($tmp_link));\nvar_dump(readlink($tmp_link2));\n@unlink($tmp_link);\n@unlink($tmp_link2);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
