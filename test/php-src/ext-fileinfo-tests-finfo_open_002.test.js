// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/fileinfo/tests/finfo_open_002.phpt
  it("FileInfo - Calling the constructor twice", function () {
    expect(parser.parseCode("<?php\n$x = new finfo;\n$x->__construct();\necho \"done!\\n\";\n?>")).toMatchSnapshot();
  });
});
