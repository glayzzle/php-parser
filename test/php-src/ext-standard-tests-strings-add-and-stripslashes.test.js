// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/add-and-stripslashes.phpt
  it("addslashes() and stripslashes() functions", function () {
    expect(parser.parseCode("<?php\n$input = '';\nfor($i=0; $i<512; $i++) {\n    $input .= chr($i%256);\n}\necho \"Normal: \";\nif($input === stripslashes(addslashes($input))) {\n    echo \"OK\\n\";\n} else {\n    echo \"FAILED\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
