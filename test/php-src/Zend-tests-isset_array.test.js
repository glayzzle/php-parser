// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/isset_array.phpt
  it("Using isset() with arrays", function () {
    expect(parser.parseCode("<?php\n$array = [\n    0 => true,\n    \"a\" => true,\n];\nvar_dump(isset($array[0]));\nvar_dump(isset($array[\"a\"]));\nvar_dump(isset($array[false]));\nvar_dump(isset($array[0.6]));\nvar_dump(isset($array[true]));\nvar_dump(isset($array[null]));\nvar_dump(isset($array[STDIN]));\ntry {\n    isset($array[[]]);\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    isset($array[new stdClass()]);\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
