// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/uconverter_bug66873.phpt
  it("Bug #66873 - crash in UConverter with invalid encoding", function () {
    expect(parser.parseCode("<?php\n    $o = new UConverter(1, 1);\n    $o->toUCallback(1, 1, 1, $b);\n    var_dump($o->getErrorCode());\n?>")).toMatchSnapshot();
  });
});
