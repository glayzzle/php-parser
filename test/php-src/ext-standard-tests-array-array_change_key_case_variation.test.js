// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_change_key_case_variation.phpt
  it("Test array_change_key_case() function - 2", function () {
    expect(parser.parseCode("<?php\n$item = array (\"one\" => 1, \"two\" => 2, \"THREE\" => 3, \"FOUR\" => \"four\");\n/* use 'case' argument other than CASE_LOWER & CASE_UPPER */\ntry {\n    var_dump(array_change_key_case($item, \"CASE_UPPER\"));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump(array_change_key_case($item, 5));\n/* when keys are different in terms of only case */\n/* should return one value key pair with key being in lowercase */\nvar_dump( array_change_key_case( array(\"ONE\" => 1, \"one\" => 3, \"One\" => 4) ) );\n/* should return one value key pair with key being in uppercase */\nvar_dump( array_change_key_case( array(\"ONE\" => 1, \"one\" => 2, \"One\" => 3), CASE_UPPER ) );\nvar_dump( array_change_key_case( array(\"ONE\" => 1, \"one\" => 1, \"One\" => 2), 5 ) );\necho \"end\\n\";\n?>")).toMatchSnapshot();
  });
});
