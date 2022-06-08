// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug30799.phpt
  it("Bug #30799 (SoapServer doesn't handle private or protected properties)", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    public    $a=\"a\";\n    private   $b=\"b\";\n    protected $c=\"c\";\n}\n$x = new SoapClient(NULL,array(\"location\"=>\"test://\",\n                               \"uri\" => \"test://\",\n                               \"exceptions\" => 0,\n                               \"trace\" => 1 ));\n$x->test(new foo());\necho $x->__getLastRequest();\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
