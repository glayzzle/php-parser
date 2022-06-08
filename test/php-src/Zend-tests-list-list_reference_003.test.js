// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/list/list_reference_003.phpt
  it("\"Reference Unpacking - From Functions\" list()", function () {
    expect(parser.parseCode("<?php\n$arr = [1, 2];\nfunction no_ref($a) {\n    return $a;\n}\nfunction no_ref_by_ref(&$a) {\n    return $a;\n}\nfunction &ref_return(&$a) {\n    return $a;\n}\nfunction &ref_return_global() {\n    global $arr;\n    return $arr;\n}\n$a = [1, 2];\n[&$var] = no_ref($a);\nvar_dump($var);\nvar_dump($a);\n$a = [1, 2];\n[&$var] = no_ref_by_ref($a);\nvar_dump($var);\nvar_dump($a);\n$a = [1, 2];\n[&$var] = ref_return($a);\nvar_dump($var);\nvar_dump($a);\n[,&$var] = ref_return_global();\nvar_dump($var);\nvar_dump($arr);\n?>")).toMatchSnapshot();
  });
});
