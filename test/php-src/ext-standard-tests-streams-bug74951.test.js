// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug74951.phpt
  it("Bug#74951 Null pointer dereference in user streams", function () {
    expect(parser.parseCode("<?php\ntrait Stream00ploiter{\n  public function s() {}\n  public function n($_) {}\n}\nstream_wrapper_register('e0ploit','Stream00ploiter');\n$s=fopen('e0ploit://',0);\n?>")).toMatchSnapshot();
  });
});
