// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/bug61546.phpt
  it("Bug #61546 (functions related to current script failed when chdir() in cli sapi)", function () {
    expect(parser.parseCode("<?php\n// reference doc for getmyinode() on php.net states that it returns an integer or FALSE on error\n// on Windows, getmyinode() returns 0 which normally casts to FALSE\n// however, the implementation of getmyinode() (in pageinfo.c) returns an explicit FALSE in the\n// event that the internal page_inode structure is less than 0, otherwise it returns the long value\n// of page_inode. therefore, an explicit 0 should be a passing value for this test.\n//\n// the ext/standard/tests/file/statpage.phpt test also tests getmyinode() returns an integer and will\n// pass even if that integer is 0. on Windows, the getmyinode() call in statpage.phpt returns 0 and\n// passes on Windows.\n$php = getenv(\"TEST_PHP_EXECUTABLE\");\n$test_code = <<<PHP\n<?php\nchdir('..');\nvar_dump(get_current_user() != \"\");\nchdir('..');\nvar_dump(getmyinode() !== false);\nvar_dump(getlastmod() != false);\nPHP;\nfile_put_contents(\"bug61546_sub.php\", $test_code);\nsystem($php . ' -n bug61546_sub.php');\nunlink(\"bug61546_sub.php\");\n?>")).toMatchSnapshot();
  });
});
