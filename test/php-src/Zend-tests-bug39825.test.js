// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug39825.phpt
  it("Bug #39825 (foreach produces memory error)", function () {
    expect(parser.parseCode("<?php\n$array = array(1 => 2, \"foo\" => \"bar\");\n$obj = (object)$array;\nforeach ($obj as $name => $value)  {\n    echo \"$name -> $value\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
