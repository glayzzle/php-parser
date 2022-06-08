// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFileObject_setCsvControl_basic.phpt
  it("SPL: SplFileObject::setCsvControl basic", function () {
    expect(parser.parseCode("<?php\nfile_put_contents('csv_control_data_basic.csv',\n<<<CDATA\n'groene appelen'|10\n'gele bananen'|20\n'rode kersen'|30\nCDATA\n);\n$s = new SplFileObject('csv_control_data_basic.csv');\n$s->setFlags(SplFileObject::READ_CSV);\n$s->setCsvControl('|', '\\'', '/');\nforeach ($s as $row) {\n    list($fruit, $quantity) = $row;\n    echo \"$fruit : $quantity\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
