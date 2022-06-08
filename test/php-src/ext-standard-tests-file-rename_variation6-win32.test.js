// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/rename_variation6-win32.phpt
  it("Test rename() function: usage variations-6", function () {
    expect(parser.parseCode("<?php\n$tmp_file = __FILE__.\".tmp\";\n$tmp_link = __FILE__.\".tmp.link\";\n$tmp_link2 = __FILE__.\".tmp.link2\";\ntouch($tmp_file);\nsymlink($tmp_file, $tmp_link);\nrename($tmp_link, $tmp_link2);\nclearstatcache();\nvar_dump(readlink($tmp_link));\nvar_dump(readlink($tmp_link2));\nvar_dump(file_exists($tmp_file));\n@unlink($tmp_link);\n@unlink($tmp_link2);\n@unlink($tmp_file);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
