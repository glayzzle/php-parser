// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/createfromwbmp-mb.phpt
  it("imagecreatefromwbmp", function () {
    expect(parser.parseCode("<?php\n$file = __DIR__ . '/src私はガラスを食べられます.wbmp';\n$im2 = imagecreatefromwbmp($file);\necho 'test create from wbmp: ';\necho imagecolorat($im2, 3,3) == 0x0 ? 'ok' : 'failed';\necho \"\\n\";\n?>")).toMatchSnapshot();
  });
});
