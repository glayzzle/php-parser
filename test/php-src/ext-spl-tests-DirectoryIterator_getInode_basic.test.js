// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/DirectoryIterator_getInode_basic.phpt
  it("SPL: Spl Directory Iterator test getInode", function () {
    expect(parser.parseCode("<?php\n//file\nmkdir('test_dir_ptfi');\n$dirIterator = new DirectoryIterator('test_dir_ptfi');\nvar_dump(decoct($dirIterator->getInode()));\n?>")).toMatchSnapshot();
  });
});
