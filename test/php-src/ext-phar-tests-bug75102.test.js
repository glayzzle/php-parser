// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug75102.phpt
  it("Bug #75102 (`PharData` says invalid checksum for valid tar)", function () {
    expect(parser.parseCode("<?php\n$phar = new PharData(__DIR__ . '/bug75102.tar');\nvar_dump(file_get_contents($phar['test.txt']->getPathName()));\n?>")).toMatchSnapshot();
  });
});
