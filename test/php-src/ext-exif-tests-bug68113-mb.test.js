// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/bug68113-mb.phpt
  it("Bug #68113 (Heap corruption in exif_thumbnail())", function () {
    expect(parser.parseCode("<?php\nvar_dump(exif_thumbnail(__DIR__.\"/bug68113私はガラスを食べられます.jpg\"));\n?>\nDone")).toMatchSnapshot();
  });
});
