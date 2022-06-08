// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/join_variation5.phpt
  it("Test join() function : usage variations - sub array as argument", function () {
    expect(parser.parseCode("<?php\n/*\n * test join() by passing pieces as array containing sub array(s)\n*/\necho \"*** Testing implode() : usage variations - sub arrays ***\\n\";\n$sub_array = array(array(1,2,3,4), array(1 => \"one\", 2 => \"two\"), \"PHP\", 50);\n// pieces as array containing sub array\nvar_dump(join(\"TEST\", $sub_array));\n// glue as array & pieces as array containing sub array\ntry {\n    var_dump(join(array(1, 2, 3, 4), $sub_array));\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n// numeric value as glue, pieces as array containing sub array\nvar_dump(join(2, $sub_array));\n// using directly the sub_array as pieces\nvar_dump(join(\", \", $sub_array[0]));\nvar_dump(join(\", \", $sub_array[1]));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
