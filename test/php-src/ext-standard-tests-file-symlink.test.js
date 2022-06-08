// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/symlink.phpt
  it("symlink() & friends", function () {
    expect(parser.parseCode("<?php\n$filename = __DIR__.\"/symlink.dat\";\n$link = __DIR__.\"/symlink.link\";\nvar_dump(symlink($filename, $link));\nvar_dump(readlink($link));\nvar_dump(linkinfo($link));\n@unlink($link);\nvar_dump(readlink($link));\nvar_dump(linkinfo($link));\ntouch($filename);\nvar_dump(symlink($filename, __DIR__));\n@unlink($link);\nvar_dump(symlink($filename, $link));\n@unlink($link);\ntouch($link);\nvar_dump(symlink($filename, $link));\n@unlink($link);\nvar_dump(link($filename, $link));\n@unlink($filename);\nvar_dump(link($filename, $link));\n@unlink($link);\nvar_dump(symlink(\".\", \".\"));\nvar_dump(link(\".\", \".\"));\nvar_dump(readlink(\".\"));\nvar_dump(linkinfo(\".\"));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
