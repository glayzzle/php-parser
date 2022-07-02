// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/serialization_objects_011.phpt
  it("Object serialization / unserialization with inherited and hidden properties.", function () {
    expect(parser.parseCode("<?php\nClass A {\n    private $APriv = \"A.APriv\";\n    protected $AProt = \"A.AProt\";\n    public $APub = \"A.APub\";\n    function audit() {\n        return isset($this->APriv, $this->AProt, $this->APub);\n    }\n}\nClass B extends A {\n    private $BPriv = \"B.BPriv\";\n    protected $BProt = \"B.BProt\";\n    public $BPub = \"B.BPub\";\n    function audit() {\n        return  parent::audit() && isset($this->AProt, $this->APub,\n                     $this->BPriv, $this->BProt, $this->BPub);\n    }\n}\nClass C extends B {\n    private $APriv = \"C.APriv\";\n    protected $AProt = \"C.AProt\";\n    public $APub = \"C.APub\";\n    private $CPriv = \"C.CPriv\";\n    protected $CProt = \"C.BProt\";\n    public $CPub = \"C.CPub\";\n    function audit() {\n        return parent::audit() && isset($this->APriv, $this->AProt, $this->APub,\n                     $this->BProt, $this->BPub,\n                     $this->CPriv, $this->CProt, $this->CPub);\n    }\n}\nfunction prettyPrint($obj) {\n    echo \"\\n\\nBefore serialization:\\n\";\n    var_dump($obj);\n    echo \"Serialized form:\\n\";\n    $ser = serialize($obj);\n    $serPrintable = str_replace(\"\\0\", '\\0', $ser);\n    var_dump($serPrintable);\n    echo \"Unserialized:\\n\";\n    $uobj = unserialize($ser);\n    var_dump($uobj);\n    echo \"Sanity check: \";\n    var_dump($uobj->audit());\n}\necho \"-- Test instance of A --\\n\";\nprettyPrint(new A);\necho \"\\n\\n-- Test instance of B --\\n\";\nprettyPrint(new B);\necho \"\\n\\n-- Test instance of C --\\n\";\nprettyPrint(new C);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
