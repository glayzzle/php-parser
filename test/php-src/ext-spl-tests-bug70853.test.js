// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug70853.phpt
  it("Bug #70853 (SplFixedArray throws exception when using ref variable as index)", function () {
    expect(parser.parseCode("<?php\n$list = new SplFixedArray(10);\n$ndx = 1;\n$ndx2 =& $ndx;\n$list[$ndx] = 123;\t// This throws an exception;\n$list[$ndx2] = 123;\t// as does this, to.\necho 'ok';\n?>")).toMatchSnapshot();
  });
});
