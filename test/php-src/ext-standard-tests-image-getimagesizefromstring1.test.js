// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/image/getimagesizefromstring1.phpt
  it("Compare getimagesize and getimagesizefromstring", function () {
    expect(parser.parseCode("<?PHP\n$img = __DIR__ . '/test.gif';\n$i1 = getimagesize($img);\n$data = file_get_contents($img);\n$i2 = getimagesizefromstring($data);\nvar_dump($i1);\nvar_dump($i2);\n?>")).toMatchSnapshot();
  });
});
