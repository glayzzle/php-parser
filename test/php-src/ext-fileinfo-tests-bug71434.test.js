// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/fileinfo/tests/bug71434.phpt
  it("Bug #68735 fileinfo out-of-bounds memory access", function () {
    expect(parser.parseCode("<?php\n$a='#!env python\n# -*- coding:utf-8 -*-\nfrom serial import Serial\nfrom sys import exit\n';\n$finfo = new finfo(FILEINFO_MIME_TYPE);\necho $finfo->buffer($a) . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
