// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/security/open_basedir_symlink.phpt
  it("Test open_basedir configuration", function () {
    expect(parser.parseCode("<?php\nrequire_once \"open_basedir.inc\";\n$initdir = getcwd();\ntest_open_basedir_before(\"symlink\");\n$target = ($initdir.\"/test/ok/ok.txt\");\nvar_dump(symlink($target, \"../bad/symlink.txt\"));\nvar_dump(symlink($target, \"../symlink.txt\"));\nvar_dump(symlink($target, \"../bad/./symlink.txt\"));\nvar_dump(symlink($target, \"./.././symlink.txt\"));\n$symlink = ($initdir.\"/test/ok/symlink.txt\");\nvar_dump(symlink(\"../bad/bad.txt\", $symlink));\nvar_dump(symlink(\"../bad\", $symlink));\nvar_dump(symlink(\"../bad/./bad.txt\", $symlink));\nvar_dump(symlink(\"../bad/bad.txt\", $symlink));\nvar_dump(symlink(\"./.././bad\", $symlink));\n$target = ($initdir.\"/test/ok/ok.txt\");\nvar_dump(symlink($target, $symlink));\nvar_dump(unlink($symlink));\nvar_dump(mkdir(\"ok2\"));\n$symlink = ($initdir.\"/test/ok/ok2/ok.txt\");\nvar_dump(symlink(\"../ok.txt\", $symlink)); // $target == (dirname($symlink).\"/\".$target) == ($initdir.\"/test/ok/ok.txt\");\nvar_dump(unlink($symlink));\ntest_open_basedir_after(\"symlink\");\n?>")).toMatchSnapshot();
  });
});
