// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/043.phpt
  it("Character encoding test", function () {
    expect(parser.parseCode("<?php\n$flags = FILTER_FLAG_ENCODE_AMP|FILTER_FLAG_ENCODE_LOW|FILTER_FLAG_ENCODE_HIGH;\nfor ($i = 0; $i < 256; $i++) {\n    var_dump(filter_var(chr($i), FILTER_UNSAFE_RAW, array(\"flags\" => $flags)));\n}\n?>")).toMatchSnapshot();
  });
});
