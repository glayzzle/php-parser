// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/security/open_basedir_link.phpt
  it("Test open_basedir configuration", function () {
    expect(parser.parseCode("<?php\nrequire_once \"open_basedir.inc\";\n$initdir = getcwd();\ntest_open_basedir_before(\"link\");\n$target = ($initdir.\"/test/ok/ok.txt\");\nvar_dump(link($target, \"../bad/link.txt\"));\nvar_dump(link($target, \"../link.txt\"));\nvar_dump(link($target, \"../bad/./link.txt\"));\nvar_dump(link($target, \"./.././link.txt\"));\n$link = ($initdir.\"/test/ok/link.txt\");\nvar_dump(link(\"../bad/bad.txt\", $link));\nvar_dump(link(\"../bad\", $link));\nvar_dump(link(\"../bad/./bad.txt\", $link));\nvar_dump(link(\"../bad/bad.txt\", $link));\nvar_dump(link(\"./.././bad\", $link));\n$target = ($initdir.\"/test/ok/ok.txt\");\nvar_dump(link($target, $link));\nvar_dump(unlink($link));\ntest_open_basedir_after(\"link\");\n?>")).toMatchSnapshot();
  });
});
