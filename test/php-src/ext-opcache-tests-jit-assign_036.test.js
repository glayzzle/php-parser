// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_036.phpt
  it("JIT ASSIGN: Assign with INTERNED string(no RC)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public $result = \"string\";\n    function __set($propName, $propValue)\n    {\n        $oldType = \\gettype($this->$propName);\n        $newType = \\gettype($propValue);\n        if ($propValue === 'false')\n        {\n            $newType   = 'boolean';\n            $propValue = \\false;\n        }\n        elseif ($propValue === 'true')\n        {\n            $newType   = 'boolean';\n            $propValue = \\true;\n        }\n        if ($oldType !== $newType)\n        {\n            $tmp = $propValue;\n            \\settype($tmp, $newType);\n        }\n        $this->propName = $propValue;\n    }\n}\n$a = new A;\n$a->result = \"okey\";\necho $a->result;\n?>")).toMatchSnapshot();
  });
});
