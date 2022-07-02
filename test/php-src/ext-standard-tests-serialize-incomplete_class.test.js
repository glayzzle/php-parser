// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/incomplete_class.phpt
  it("(un)serializing __PHP_Incomplete_Class instance", function () {
    expect(parser.parseCode("<?php\n$d = serialize(new __PHP_Incomplete_Class);\n$o = unserialize($d);\nvar_dump($o);\ntry {\n    $o->test = \"a\";\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($o->test);\nvar_dump($o->test2);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
