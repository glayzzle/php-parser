// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/returnByReference.002.phpt
  it("Returning a reference from a function.", function () {
    expect(parser.parseCode("<?php\nfunction &returnRef() {\n        global $a;\n        return $a;\n}\nfunction returnVal() {\n        global $a;\n        return $a;\n}\n$a = \"original\";\n$b =& returnVal();\n$b = \"changed\";\nvar_dump($a); //expecting warning + \"original\"\n$a = \"original\";\n$b =& returnRef();\n$b = \"changed\";\nvar_dump($a); //expecting \"changed\"\n?>")).toMatchSnapshot();
  });
});
