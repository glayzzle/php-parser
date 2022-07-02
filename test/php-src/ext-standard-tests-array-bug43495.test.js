// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug43495.phpt
  it("Bug #43495 (array_merge_recursive() crashes with recursive arrays)", function () {
    expect(parser.parseCode("<?php\n$a=array(\"key1\"=>array(\"key2\"=>array()));\n$a[\"key1\"][\"key2\"][\"key3\"]=&$a;\n$b=array(\"key1\"=>array(\"key2\"=>array()));\n$b[\"key1\"][\"key2\"][\"key3\"]=&$b;\ntry {\n    array_merge_recursive($a,$b);\n} catch (\\Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n/* Break recursion */\n$a[\"key1\"][\"key2\"][\"key3\"] = null;\n$b[\"key1\"][\"key2\"][\"key3\"] = null;\n?>")).toMatchSnapshot();
  });
});
