// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/dit_001.phpt
  it("SPL: Problem with casting to string", function () {
    expect(parser.parseCode("<?php\n$d = new DirectoryIterator('.');\nvar_dump($d);\nvar_dump(is_string($d));\npreg_match('/x/', $d);\nvar_dump(is_string($d));\n?>")).toMatchSnapshot();
  });
});
