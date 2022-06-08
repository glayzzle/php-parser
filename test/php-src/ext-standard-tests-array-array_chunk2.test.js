// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_chunk2.phpt
  it("basic array_chunk test", function () {
    expect(parser.parseCode("<?php\n$input_array = array('a', 'b', 'c', 'd', 'e');\ntry {\n    var_dump(array_chunk($input_array, 0));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump(array_chunk($input_array, 0, true));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\nvar_dump(array_chunk($input_array, 1));\nvar_dump(array_chunk($input_array, 1, true));\nvar_dump(array_chunk($input_array, 2));\nvar_dump(array_chunk($input_array, 2, true));\nvar_dump(array_chunk($input_array, 10));\nvar_dump(array_chunk($input_array, 10, true));\n?>")).toMatchSnapshot();
  });
});
