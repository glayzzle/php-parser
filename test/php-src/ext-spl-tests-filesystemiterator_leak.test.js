// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/filesystemiterator_leak.phpt
  it("Don't leak when breaking from FilesystemIterator", function () {
    expect(parser.parseCode("<?php\n$iterator = new FilesystemIterator(__DIR__);\nforeach ($iterator as $value) {\n    break;\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
