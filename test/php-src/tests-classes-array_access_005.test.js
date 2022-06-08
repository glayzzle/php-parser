// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/array_access_005.phpt
  it("ZE2 ArrayAccess and sub Arrays", function () {
    expect(parser.parseCode("<?php\nclass Peoples implements ArrayAccess {\n    public $person;\n    function __construct() {\n        $this->person = array(array('name'=>'Joe'));\n    }\n    function offsetExists($index): bool {\n        return array_key_exists($this->person, $index);\n    }\n    function offsetGet($index): mixed {\n        return $this->person[$index];\n    }\n    function offsetSet($index, $value): void {\n        $this->person[$index] = $value;\n    }\n    function offsetUnset($index): void {\n        unset($this->person[$index]);\n    }\n}\n$people = new Peoples;\nvar_dump($people->person[0]['name']);\n$people->person[0]['name'] = $people->person[0]['name'] . 'Foo';\nvar_dump($people->person[0]['name']);\n$people->person[0]['name'] .= 'Bar';\nvar_dump($people->person[0]['name']);\necho \"---ArrayOverloading---\\n\";\n$people = new Peoples;\nvar_dump($people[0]);\nvar_dump($people[0]['name']);\nvar_dump($people->person[0]['name'] . 'Foo'); // impossible to assign this since we don't return references here\n$x = $people[0]; // creates a copy\n$x['name'] .= 'Foo';\n$people[0] = $x;\nvar_dump($people[0]);\n$people[0]['name'] = 'JoeFoo';\nvar_dump($people[0]['name']);\n$people[0]['name'] = 'JoeFooBar';\nvar_dump($people[0]['name']);\n?>")).toMatchSnapshot();
  });
});
