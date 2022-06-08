// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug53515.phpt
  it("Bug #53515 (property_exists incorrect on ArrayObject null and 0 values)", function () {
    expect(parser.parseCode("<?php\n$a = array('a' => 1, 'b'=> true, 'c' => 0, 'd' => null, 'e' => false, 'f' => array());\n$o = new ArrayObject($a, ArrayObject::ARRAY_AS_PROPS);\n$a['z'] = '';\n$a[''] = '';\nforeach ($a as $key => $value) {\n echo $key . ': ' . (is_null($value) ? 'null' : @\"$value\") .\n    ' array_key_exists: ' . (array_key_exists($key, $a) ? 'true' : 'false') .\n    ' property_exists: ' . (property_exists($o, $key) ? 'true' : 'false'),\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
