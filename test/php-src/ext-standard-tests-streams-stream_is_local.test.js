// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/stream_is_local.phpt
  it("Testing stream_is_local()", function () {
    expect(parser.parseCode("<?php\n$a = 1;\n$b = $a;\nvar_dump(stream_is_local($b));\nvar_dump($b);\nvar_dump(stream_is_local(fopen(__FILE__, 'r')));\n?>")).toMatchSnapshot();
  });
});
