// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug78976.phpt
  it("Bug #78976 (SplFileObject::fputcsv returns -1 on failure)", function () {
    expect(parser.parseCode("<?php\n$file = new SplFileObject('php://memory', 'r');\nvar_dump($file->fputcsv(['foo', 'bar']));\n?>")).toMatchSnapshot();
  });
});
