// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sysvshm/tests/bug72858.phpt
  it("Bug #72858 shm_attach null dereference", function () {
    expect(parser.parseCode("<?php\n$v1=100;\n$v2=0x4fffffff + 0x1337;\nshm_attach($v1,$v2);\n?>")).toMatchSnapshot();
  });
});
