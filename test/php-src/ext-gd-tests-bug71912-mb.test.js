// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug71912-mb.phpt
  it("Bug #71912 (libgd: signedness vulnerability)", function () {
    expect(parser.parseCode("<?php\nimagecreatefromgd2(__DIR__ . DIRECTORY_SEPARATOR . \"invalid_neg_size私はガラスを食べられます.gd2\");\n?>\nOK")).toMatchSnapshot();
  });
});
