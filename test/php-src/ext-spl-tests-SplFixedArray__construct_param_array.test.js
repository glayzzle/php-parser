// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFixedArray__construct_param_array.phpt
  it("SplFixedArray::__construct() with array passed as integer.", function () {
    expect(parser.parseCode("<?php\ntry {\n    $array = new SplFixedArray( array(\"string\", 1) );\n} catch (TypeError $iae) {\n    echo \"Ok - \".$iae->getMessage().PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
