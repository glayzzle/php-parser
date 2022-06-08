// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug69845.phpt
  it("Fixed bug #69845 (ArrayObject with ARRAY_AS_PROPS broken)", function () {
    expect(parser.parseCode("<?php\nfor ($i = 0; $i<2; $i++) {\n    $data = new \\ArrayObject(new stdClass(), ArrayObject::ARRAY_AS_PROPS);\n    $data->itemType = 'bulletin';\n    var_dump(!is_null($data['itemType']));\n}\n?>")).toMatchSnapshot();
  });
});
