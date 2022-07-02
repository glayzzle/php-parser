// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/var_export3.phpt
  it("var_export() and classes", function () {
    expect(parser.parseCode("<?php\nclass kake {\n    public $mann;\n    protected $kvinne;\n    function __construct()\n    {\n        $this->mann = 42;\n        $this->kvinne = 43;\n    }\n}\n$kake = new kake;\nvar_export($kake);\n?>")).toMatchSnapshot();
  });
});
