// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/count_chars.phpt
  it("count_chars() function", function () {
    expect(parser.parseCode("<?php\n$s = \"het leven is net erwtensoep - je kunt er geen touw aan vastknopen\";\nfor($i=0; $i<3; $i++) {\n    echo implode(count_chars($s, $i)).\"\\n\";\n}\necho $a = count_chars($s, 3), \"\\n\";\necho (int) strlen(count_chars($s, 4)) == 256-strlen($a),\"\\n\";\n?>")).toMatchSnapshot();
  });
});
