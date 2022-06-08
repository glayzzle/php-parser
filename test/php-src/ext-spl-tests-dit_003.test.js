// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/dit_003.phpt
  it("SPL: FilesystemIterator and foreach", function () {
    expect(parser.parseCode("<?php\n$count = 0;\nforeach(new FilesystemIterator(__DIR__) as $ent)\n{\n    ++$count;\n}\nvar_dump($count > 0);\n?>")).toMatchSnapshot();
  });
});
