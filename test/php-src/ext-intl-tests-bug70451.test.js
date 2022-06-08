// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug70451.phpt
  it("Bug #70451 IntlChar::charFromName() not consistent with C library or HHVM", function () {
    expect(parser.parseCode("<?php\nvar_dump(IntlChar::charFromName(\"RECYCLING SYMBOL FOR TYPE-1 PLASTICS\"));\nvar_dump(IntlChar::charFromName(\"sdfasdfasdfasdf\"));\n?>")).toMatchSnapshot();
  });
});
