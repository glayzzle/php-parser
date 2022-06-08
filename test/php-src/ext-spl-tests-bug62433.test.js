// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug62433.phpt
  it("Bug #62433 Inconsistent behavior of RecursiveDirectoryIterator to dot files (. and ..)", function () {
    expect(parser.parseCode("<?php\n$dots = array_keys(iterator_to_array(new RecursiveDirectoryIterator(__DIR__)));\n$ndots = array_keys(iterator_to_array(new RecursiveDirectoryIterator(__DIR__, FilesystemIterator::SKIP_DOTS)));\nvar_dump(in_array(__DIR__ . DIRECTORY_SEPARATOR . '.', $dots));\nvar_dump(in_array(__DIR__ . DIRECTORY_SEPARATOR . '..', $dots));\nvar_dump(in_array(__DIR__ . DIRECTORY_SEPARATOR . '.', $ndots));\nvar_dump(in_array(__DIR__ . DIRECTORY_SEPARATOR . '..', $ndots));\n?>")).toMatchSnapshot();
  });
});
