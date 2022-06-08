// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/str_word_count1.phpt
  it("str_word_count() and invalid arguments", function () {
    expect(parser.parseCode("<?php\nvar_dump(str_word_count(\"\"));\ntry {\n    var_dump(str_word_count(\"\", -1));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump(str_word_count(\"\", -1, $a));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
