// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplObjectStorage_setInfo_empty_storage.phpt
  it("Check that SplObjectStorage::setInfo returns NULL when storage is empty", function () {
    expect(parser.parseCode("<?php\n$s = new SplObjectStorage();\nvar_dump($s->setInfo('some_value'));\n?>")).toMatchSnapshot();
  });
});
