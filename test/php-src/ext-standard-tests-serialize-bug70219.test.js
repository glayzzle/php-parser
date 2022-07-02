// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug70219.phpt
  it("Bug #70219 Use after free vulnerability in session deserializer", function () {
    expect(parser.parseCode("<?php\nclass obj implements Serializable {\n    var $data;\n    function serialize() {\n        return serialize($this->data);\n    }\n    function unserialize($data) {\n        session_start();\n        session_decode($data);\n    }\n}\n$inner = 'ryat|a:1:{i:0;a:1:{i:1;';\n$exploit = 'a:2:{i:0;C:3:\"obj\":'.strlen($inner).':{'.$inner.'}i:1;R:4;}';\n$data = unserialize($exploit);\nfor ($i = 0; $i < 5; $i++) {\n    $v[$i] = 'hi'.$i;\n}\nvar_dump($data);\n?>")).toMatchSnapshot();
  });
});
