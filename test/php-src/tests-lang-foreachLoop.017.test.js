// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/foreachLoop.017.phpt
  it("Ensure foreach works with arrays with Binary keys.", function () {
    expect(parser.parseCode("<?php\n$a = array ( \"\\x90\" => 10 );\nforeach ($a as $val=>$key) echo $key;\necho \"\\nDone\\n\";\n?>")).toMatchSnapshot();
  });
});
