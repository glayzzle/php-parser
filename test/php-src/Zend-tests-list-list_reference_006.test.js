// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/list/list_reference_006.phpt
  it("\"Reference Unpacking - Class ArrayAccess No Reference\" list()", function () {
    expect(parser.parseCode("<?php\nclass StorageNoRef implements ArrayAccess {\n    private $s = [];\n    function __construct(array $a) { $this->s = $a; }\n    function offsetSet ($k, $v): void { $this->s[$k] = $v; }\n    function offsetGet ($k): mixed { return $this->s[$k]; }\n    function offsetExists ($k): bool { return isset($this->s[$k]); }\n    function offsetUnset ($k): void { unset($this->s[$k]); }\n}\n$a = new StorageNoRef([1, 2]);\nlist(&$one, $two) = $a;\nvar_dump($a);\n$a = new StorageNoRef([1, 2]);\nlist(,,list($var)) = $a;\nvar_dump($a);\n$a = new StorageNoRef(['one' => 1, 'two' => 2]);\n['one' => &$one, 'two' => $two] = $a;\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
