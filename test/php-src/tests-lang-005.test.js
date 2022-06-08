// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/005.phpt
  it("Simple If/ElseIf/Else Test", function () {
    expect(parser.parseCode("<?php\n$a=1;\nif($a==0) {\n    echo \"bad\";\n} elseif($a==3) {\n    echo \"bad\";\n} else {\n    echo \"good\";\n}\n?>")).toMatchSnapshot();
  });
});
