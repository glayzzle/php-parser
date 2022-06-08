// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/serialize.phpt
  it("json_encode() Serialization tests", function () {
    expect(parser.parseCode("<?php\nclass NonSerializingTest\n{\n    public $data;\n    public function __construct($data)\n    {\n        $this->data = $data;\n    }\n}\nclass SerializingTest extends NonSerializingTest implements JsonSerializable\n{\n    public function jsonSerialize(): mixed\n    {\n        return $this->data;\n    }\n}\nclass ValueSerializingTest extends SerializingTest\n{\n    public function jsonSerialize(): mixed\n    {\n        return array_values(is_array($this->data) ? $this->data : get_object_vars($this->data));\n    }\n}\nclass SelfSerializingTest extends SerializingTest\n{\n    public function jsonSerialize(): mixed\n    {\n        return $this;\n    }\n}\n$adata = array(\n    'str'\t=> 'foo',\n    'int'\t=> 1,\n    'float'\t=> 2.3,\n    'bool'\t=> false,\n    'nil'\t=> null,\n    'arr'\t=> array(1,2,3),\n    'obj'\t=> new StdClass,\n);\n$ndata = array_values($adata);\n$odata = (object)$adata;\nforeach(array('NonSerializingTest','SerializingTest','ValueSerializingTest','SelfSerializingTest') as $class) {\n    echo \"==$class==\\n\";\n    echo json_encode(new $class($adata)), \"\\n\";\n    echo json_encode(new $class($ndata)), \"\\n\";\n    echo json_encode(new $class($odata)), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
