// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug34873.phpt
  it("Bug #34873 (Segmentation Fault on foreach in object)", function () {
    expect(parser.parseCode("<?php\nclass pwa {\n    public $var;\n    function __construct(){\n        $this->var = array();\n    }\n    function test (){\n        $cont = array();\n        $cont[\"mykey\"] = \"myvalue\";\n        foreach ($cont as $this->var['key'] => $this->var['value'])\n        var_dump($this->var['value']);\n    }\n}\n$myPwa = new Pwa();\n$myPwa->test();\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
