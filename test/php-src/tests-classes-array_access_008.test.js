// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/array_access_008.phpt
  it("ZE2 ArrayAccess and ASSIGN_OP operators (.=)", function () {
    expect(parser.parseCode("<?php\nclass Peoples implements ArrayAccess {\n    public $person;\n    function __construct() {\n        $this->person = array(array('name'=>'Foo'));\n    }\n    function offsetExists($index): bool {\n        return array_key_exists($this->person, $index);\n    }\n    function offsetGet($index): mixed {\n        return $this->person[$index];\n    }\n    function offsetSet($index, $value): void {\n        $this->person[$index] = $value;\n    }\n    function offsetUnset($index): void {\n        unset($this->person[$index]);\n    }\n}\n$people = new Peoples;\nvar_dump($people->person[0]['name']);\n$people->person[0]['name'] = $people->person[0]['name'] . 'Bar';\nvar_dump($people->person[0]['name']);\n$people->person[0]['name'] .= 'Baz';\nvar_dump($people->person[0]['name']);\necho \"===ArrayOverloading===\\n\";\n$people = new Peoples;\nvar_dump($people[0]['name']);\n$people[0]['name'] = 'FooBar';\nvar_dump($people[0]['name']);\n$people[0]['name'] = $people->person[0]['name'] . 'Bar';\nvar_dump($people[0]['name']);\n$people[0]['name'] .= 'Baz';\nvar_dump($people[0]['name']);\n?>")).toMatchSnapshot();
  });
});
