// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFileObject_setCsvControl_error002.phpt
  it("SPL: SplFileObject::setCsvControl error 002", function () {
    expect(parser.parseCode("<?php\nfile_put_contents('csv_control_data_error002.csv',\n<<<CDATA\n'groene appelen'|10\n'gele bananen'|20\n'rode kersen'|30\nCDATA\n);\n$s = new SplFileObject('csv_control_data_error002.csv');\n$s->setFlags(SplFileObject::READ_CSV);\ntry {\n    $s->setCsvControl('|', 'two');\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
