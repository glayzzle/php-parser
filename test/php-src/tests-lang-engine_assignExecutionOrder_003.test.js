// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/engine_assignExecutionOrder_003.phpt
  it("Evaluation order during assignments.", function () {
    expect(parser.parseCode("<?php\n$b = \"bb\";\n$a = \"aa\";\nfunction foo()\n{\necho \"Bad call\\n\";\n}\nfunction baa()\n{\necho \"Good call\\n\";\n}\n$bb = \"baa\";\n$aa = \"foo\";\n$c = ${$a=$b};\n$c();\n$a1 = array(\"dead\",\"dead\",\"dead\");\n$a2 = array(\"dead\",\"dead\",\"live\");\n$a3 = array(\"dead\",\"dead\",\"dead\");\n$a = array($a1,$a2,$a3);\nfunction live()\n{\necho \"Good call\\n\";\n}\nfunction dead()\n{\necho \"Bad call\\n\";\n}\n$i = 0;\n$a[$i=1][++$i]();\n$a = -1;\nfunction foo1()\n{\n  global $a;\n  return ++$a;\n}\n$arr = array(array(0,0),0);\n$brr = array(0,0,array(0,0,0,5),0);\n$crr = array(0,0,0,0,array(0,0,0,0,0,10),0,0);\n$arr[foo1()][foo1()] = $brr[foo1()][foo1()] +\n                     $crr[foo1()][foo1()];\n$val = $arr[0][1];\necho \"Expect 15 and get...$val\\n\";\n$x = array(array(0),0);\nfunction mod($b)\n{\nglobal $x;\n$x = $b;\nreturn 0;\n}\n$x1 = array(array(1),1);\n$x2 = array(array(2),2);\n$x3 = array(array(3),3);\n$bx = array(10);\n$x[mod($x1)][mod($x2)] = $bx[mod($x3)];\n// expecting 10,3\nvar_dump($x);\n?>")).toMatchSnapshot();
  });
});
