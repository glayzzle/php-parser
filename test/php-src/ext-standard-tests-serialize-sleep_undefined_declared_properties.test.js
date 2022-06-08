// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/sleep_undefined_declared_properties.phpt
  it("__sleep() returning undefined declared properties", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public $pub;\n    protected $prot;\n    private $priv;\n    public function __construct() {\n        unset($this->pub, $this->prot, $this->priv);\n    }\n    public function __sleep() {\n        return ['pub', 'prot', 'priv'];\n    }\n}\nvar_dump(serialize(new Test));\n?>")).toMatchSnapshot();
  });
});
