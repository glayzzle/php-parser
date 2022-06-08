// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/str_word_count.phpt
  it("str_word_count()", function () {
    expect(parser.parseCode("<?php\n$str = \"Hello friend, you're\n    looking          good today!\";\n$b =& $str;\nvar_dump(str_word_count($str, 1));\nvar_dump(str_word_count($str, 2));\nvar_dump(str_word_count($str));\ntry {\n    var_dump(str_word_count($str, 3));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump(str_word_count($str, 123));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump(str_word_count($str, -1));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump(str_word_count($str, 999999999));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\nvar_dump($str);\n$str2 = \"F0o B4r 1s bar foo\";\nvar_dump(str_word_count($str2, 0, \"04\"));\nvar_dump(str_word_count($str2, 0, \"01\"));\nvar_dump(str_word_count($str2, 0, \"014\"));\nvar_dump(str_word_count($str2, 0, \"\"));\nvar_dump(str_word_count($str2, 1, \"04\"));\nvar_dump(str_word_count($str2, 1, \"01\"));\nvar_dump(str_word_count($str2, 1, \"014\"));\nvar_dump(str_word_count($str2, 1, \"\"));\nvar_dump(str_word_count($str2, 2, \"04\"));\nvar_dump(str_word_count($str2, 2, \"01\"));\nvar_dump(str_word_count($str2, 2, \"014\"));\nvar_dump(str_word_count($str2, 2, \"\"));\nvar_dump(str_word_count(\"foo'0 bar-0var\", 2, \"0\"));\nvar_dump(str_word_count(\"'foo'\", 2));\nvar_dump(str_word_count(\"'foo'\", 2, \"'\"));\nvar_dump(str_word_count(\"-foo-\", 2));\nvar_dump(str_word_count(\"-foo-\", 2, \"-\"));\n?>\nDONE")).toMatchSnapshot();
  });
});
