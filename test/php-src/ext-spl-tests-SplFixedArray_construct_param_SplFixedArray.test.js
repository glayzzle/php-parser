// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFixedArray_construct_param_SplFixedArray.phpt
  it("Create an SplFixedArray using an SplFixedArray object.", function () {
    expect(parser.parseCode("<?php\ntry {\n    $array = new SplFixedArray(new SplFixedArray(3));\n} catch (TypeError $iae) {\n    echo \"Ok - \".$iae->getMessage().PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
