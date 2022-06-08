// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/array_access_003.phpt
  it("ZE2 ArrayAccess::offsetGet ambiguities", function () {
    expect(parser.parseCode("<?php\nclass ObjectOne implements ArrayAccess {\n    public $a = array('1st', 1, 2=>'3rd', '4th'=>4);\n    function offsetExists($index): bool {\n        echo __METHOD__ . \"($index)\\n\";\n        return array_key_exists($index, $this->a);\n    }\n    function offsetGet($index): mixed {\n        echo __METHOD__ . \"($index)\\n\";\n        switch($index) {\n        case 1:\n            $a = 'foo';\n            return $a . 'Bar';\n        case 2:\n            static $a=1;\n            return $a;\n        }\n        return $this->a[$index];\n    }\n    function offsetSet($index, $newval): void {\n        echo __METHOD__ . \"($index,$newval)\\n\";\n        if ($index==3) {\n            $this->cnt = $newval;\n        }\n        $this->a[$index] = $newval;\n    }\n    function offsetUnset($index): void {\n        echo __METHOD__ . \"($index)\\n\";\n        unset($this->a[$index]);\n    }\n}\n$obj = new ObjectOne;\nvar_dump($obj[1]);\nvar_dump($obj[2]);\n$obj[2]++;\nvar_dump($obj[2]);\n?>")).toMatchSnapshot();
  });
});
