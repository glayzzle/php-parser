// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/array_access_012.phpt
  it("ZE2 ArrayAccess cannot assign by reference", function () {
    expect(parser.parseCode("<?php\nclass ArrayAccessImpl implements ArrayAccess {\n    private $data = array();\n    public function offsetUnset($index): void {}\n    public function offsetSet($index, $value): void {\n        $this->data[$index] = $value;\n    }\n    public function offsetGet($index): mixed {\n        return $this->data[$index];\n    }\n    public function offsetExists($index): bool {\n        return isset($this->data[$index]);\n    }\n}\n$data = new ArrayAccessImpl();\n$test = 'some data';\n$data['element'] = NULL; // prevent notice\n$data['element'] = &$test;\n?>\n===DONE===")).toMatchSnapshot();
  });
});
