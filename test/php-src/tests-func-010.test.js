// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/func/010.phpt
  it("function with many parameters", function () {
    expect(parser.parseCode("<?php\n// the stack size + some random constant\n$boundary = 16*1024-16;\n$limit    = $boundary+42;\nfunction test($a,$b)\n{\n    var_dump($a === $b);\n    test2($a,$b);\n}\nfunction test2($a, $b)\n{\n    if ($a !== $b) {\n        var_dump(\"something went wrong: $a !== $b\");\n    }\n}\n// generate the function\n$str = \"<?php\\nfunction x(\";\nfor($i=0; $i < $limit; ++$i) {\n    $str .= '$v'.dechex($i).($i===($limit-1) ? '' : ',');\n}\n$str .= ') {\n    test($v42, \\'42\\');\n    test(\\'4000\\', $v4000);\n    test2($v300, \\'300\\');\n    test($v0, \\'0\\'); // first\n    test($v'.dechex($limit-1).\", '\".dechex($limit-1).'\\'); // last\n    test($v'.dechex($boundary).\", '\".dechex($boundary).'\\'); //boundary\n    test($v'.dechex($boundary+1).\", '\".dechex($boundary+1).'\\'); //boundary+1\n    test($v'.dechex($boundary-1).\", '\".dechex($boundary-1).'\\'); //boundary-1\n}';\n// generate the function call\n$str .= \"\\n\\nx(\";\nfor($i=0; $i< $limit; ++$i) {\n    $str .= \"'\".dechex($i).\"'\".($i===($limit-1) ? '' : ',');\n}\n$str .= \");\\n\";\n$filename = __DIR__.'/010-file.php';\nfile_put_contents(__DIR__.'/010-file.php', $str);\nunset($str);\ninclude($filename);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
