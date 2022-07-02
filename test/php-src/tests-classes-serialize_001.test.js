// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/serialize_001.phpt
  it("ZE2 Serializable", function () {
    expect(parser.parseCode("<?php\nclass Test implements Serializable\n{\n    public $data;\n    function __construct($data)\n    {\n        echo __METHOD__ . \"($data)\\n\";\n        $this->data = $data;\n    }\n    function serialize()\n    {\n        echo __METHOD__ . \"({$this->data})\\n\";\n        return $this->data;\n    }\n    function unserialize($serialized)\n    {\n        echo __METHOD__ . \"($serialized)\\n\";\n        $this->data = $serialized;\n        var_dump($this);\n    }\n}\n$tests = array('String', NULL, 42, false);\nforeach($tests as $data)\n{\n    try\n    {\n        echo \"==========\\n\";\n        var_dump($data);\n        $ser = serialize(new Test($data));\n        var_dump(unserialize($ser));\n    }\n    catch(Exception $e)\n    {\n        echo 'Exception: ' . $e->getMessage() . \"\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
