// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/057.phpt
  it("filter_input_array() and filter_var_array() with invalid $definition arguments", function () {
    expect(parser.parseCode("<?php\nforeach (array(null, true, false, 1, \"\", new stdClass) as $invalid) {\n    try {\n        var_dump(filter_input_array(INPUT_POST, $invalid));\n    } catch (TypeError $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n    try {\n        var_dump(filter_var_array(array(), $invalid));\n    } catch (TypeError $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
