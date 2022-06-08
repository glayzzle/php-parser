// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/031.phpt
  it("filter_var() and FLOAT", function () {
    expect(parser.parseCode("<?php\n$floats = array(\n'1.234   ',\n'   1.234',\n'1.234'\t,\n'1.2e3',\n'7E3',\n'7E3     ',\n'  7E3     ',\n'  7E-3     '\n);\nforeach ($floats as $float) {\n    $out = filter_var($float, FILTER_VALIDATE_FLOAT);\n    var_dump($out);\n}\n$floats = array(\n'1.234   '\t=> ',',\n'1,234'\t\t=> ',',\n'   1.234'\t=> '.',\n'1.234'\t\t=> '..',\n'1.2e3'\t\t=> ','\n);\necho \"\\ncustom decimal:\\n\";\nforeach ($floats as $float => $dec) {\n    try {\n        var_dump(filter_var($float, FILTER_VALIDATE_FLOAT, array(\"options\"=>array('decimal' => $dec))));\n    } catch (ValueError $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
