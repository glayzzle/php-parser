// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/009.phpt
  it("json_encode() with non-packed array that should be encoded as an array rather than object", function () {
    expect(parser.parseCode("<?php\n$a = array(1, 2, 3, 'foo' => 'bar');\nunset($a['foo']);\nvar_dump(json_encode($a));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
