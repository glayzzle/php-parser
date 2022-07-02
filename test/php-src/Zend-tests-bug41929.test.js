// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug41929.phpt
  it("Bug #41929 (Foreach on object does not iterate over all visible properties)", function () {
    expect(parser.parseCode("<?php\nclass C {\n  private $priv = \"ok\";\n  function doLoop() {\n    echo $this->priv,\"\\n\";\n    foreach ($this as $k=>$v) {\n      echo \"$k: $v\\n\";\n    }\n  }\n}\nclass D extends C {\n}\n$myD = new D;\n$myD->doLoop();\n?>")).toMatchSnapshot();
  });
});
