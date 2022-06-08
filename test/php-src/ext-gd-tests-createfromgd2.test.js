// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/createfromgd2.phpt
  it("imagecreatefromgd2", function () {
    expect(parser.parseCode("<?php\n$file = __DIR__ . '/src.gd2';\n$im2 = imagecreatefromgd2($file);\necho 'test create from gd2: ';\necho imagecolorat($im2, 4,4) == 0xffffff ? 'ok' : 'failed';\necho \"\\n\";\n$im3 = imagecreatefromgd2part($file, 4,4, 2,2);\necho 'test create from gd2 part: ';\necho imagecolorat($im2, 4,4) == 0xffffff ? 'ok' : 'failed';\necho \"\\n\";\n?>")).toMatchSnapshot();
  });
});
