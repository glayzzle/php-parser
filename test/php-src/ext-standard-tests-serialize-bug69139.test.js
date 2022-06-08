// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug69139.phpt
  it("Bug #69139 (Crash in gc_zval_possible_root on unserialize)", function () {
    expect(parser.parseCode("<?php\n$str = 'a:1126666:{i:0;r:1;i:-09610;r:1;i:-0;i:0;i:0;O:1:\"A\":2119X:i:0;i:0;i:0;i:0;i:0;O:1:\"A\":2116:{i:0;r:5;i:-096766610;r:1;i:-610;r:1;i:0;i:0;';\n@unserialize($str);\necho \"Alive\";\n?>")).toMatchSnapshot();
  });
});
