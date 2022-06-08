// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFixedArray__construct_param_string.phpt
  it("SplFixedArray::__construct() with string passed as parameter.", function () {
    expect(parser.parseCode("<?php\ntry {\n    $array = new SplFixedArray( \"string\" );\n} catch (TypeError $iae) {\n    echo \"Ok - \".$iae->getMessage().PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
