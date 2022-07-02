// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/security/open_basedir_readlink.phpt
  it("Test open_basedir configuration", function () {
    expect(parser.parseCode("<?php\nchdir(__DIR__);\nini_set(\"open_basedir\", \".\");\nrequire_once \"open_basedir.inc\";\n$initdir = getcwd();\ntest_open_basedir_before(\"readlink\", FALSE);\nchdir($initdir);\n$target = ($initdir.\"/test/bad/bad.txt\");\n$symlink = ($initdir.\"/test/ok/symlink.txt\");\nvar_dump(symlink($target, $symlink));\nchdir($initdir.\"/test/ok\");\nvar_dump(readlink(\"symlink.txt\"));\nvar_dump(readlink(\"../ok/symlink.txt\"));\nvar_dump(readlink(\"../ok/./symlink.txt\"));\nvar_dump(readlink(\"./symlink.txt\"));\nvar_dump(readlink($initdir.\"/test/ok/symlink.txt\"));\n$target = ($initdir.\"/test/ok/ok.txt\");\n$symlink = ($initdir.\"/test/ok/symlink.txt\");\nvar_dump(symlink($target, $symlink));\nvar_dump(readlink($symlink));\ntest_open_basedir_after(\"readlink\");\n?>")).toMatchSnapshot();
  });
});
