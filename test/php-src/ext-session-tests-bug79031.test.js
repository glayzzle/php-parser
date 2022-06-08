// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/bug79031.phpt
  it("Bug #79031: Session unserialization problem", function () {
    expect(parser.parseCode("<?php\nclass SerializableClass implements Serializable {\n    public $sharedProp;\n    public function __construct($prop)\n    {\n        $this->sharedProp = $prop;\n    }\n    public function __set($key, $value)\n    {\n        $this->$key = $value;\n    }\n    public function serialize()\n    {\n        return serialize(get_object_vars($this));\n    }\n    public function unserialize($data)\n    {\n        $ar = unserialize($data);\n        if ($ar === false) {\n            return;\n        }\n        foreach ($ar as $k => $v) {\n            $this->__set($k, $v);\n        }\n    }\n}\n// Shared object that acts as property of two another objects stored in session\n$testPropertyObj = new stdClass();\n$testPropertyObj->name = 'test';\n// Two instances of \\SerializableClass that shares property\n$sessionObject = [\n    'obj1' => new SerializableClass($testPropertyObj),\n    'obj2' => new SerializableClass($testPropertyObj),\n];\nsession_start();\n$_SESSION = $sessionObject;\n$sessionString = session_encode();\nsession_decode($sessionString);\necho $sessionString;\necho \"\\n\\n\";\nvar_dump($_SESSION);\n?>")).toMatchSnapshot();
  });
});
