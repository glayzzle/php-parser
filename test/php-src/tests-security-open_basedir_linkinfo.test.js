// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/security/open_basedir_linkinfo.phpt
  it("Test open_basedir configuration", function () {
    expect(parser.parseCode("<?php\nchdir(__DIR__);\nini_set(\"open_basedir\", \".\");\nrequire_once \"open_basedir.inc\";\n$initdir = getcwd();\ntest_open_basedir_before(\"linkinfo\", FALSE);\nchdir($initdir);\n$target = ($initdir.\"/test/bad/bad.txt\");\n$symlink = ($initdir.\"/test/ok/symlink.txt\");\nvar_dump(symlink($target, $symlink));\nchdir($initdir.\"/test/ok\");\nvar_dump(linkinfo(\"symlink.txt\"));\nvar_dump(linkinfo(\"../ok/symlink.txt\"));\nvar_dump(linkinfo(\"../ok/./symlink.txt\"));\nvar_dump(linkinfo(\"./symlink.txt\"));\nvar_dump(linkinfo($initdir.\"/test/ok/symlink.txt\"));\n$target = ($initdir.\"/test/ok/ok.txt\");\n$symlink = ($initdir.\"/test/ok/symlink.txt\");\nvar_dump(symlink($target, $symlink));\nvar_dump(linkinfo($symlink));\nvar_dump(unlink($symlink));\ntest_open_basedir_after(\"linkinfo\");\n?>")).toMatchSnapshot();
  });
});
