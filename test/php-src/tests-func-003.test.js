// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/func/003.phpt
  it("General function test", function () {
    expect(parser.parseCode("<?php\nfunction a()\n{\n  echo \"hey\\n\";\n}\nfunction b($i)\n{\n  echo \"$i\\n\";\n}\nfunction c($i,$j)\n{\n  echo \"Counting from $i to $j\\n\";\n  for ($k=$i; $k<=$j; $k++) {\n    echo \"$k\\n\";\n  }\n}\na();\nb(\"blah\");\na();\nb(\"blah\",\"blah\");\nc(7,14);\na();\nfunction factorial($n)\n{\n  if ($n==0 || $n==1) {\n    return 1;\n  } else {\n    return factorial($n-1)*$n;\n  }\n}\nfunction factorial2($start, $n)\n{\n  if ($n<=$start) {\n    return $start;\n  } else {\n    return factorial2($start,$n-1)*$n;\n  }\n}\nfor ($k=0; $k<10; $k++) {\n  for ($i=0; $i<=10; $i++) {\n    $n=factorial($i);\n    echo \"factorial($i) = $n\\n\";\n  }\n}\necho \"and now, from a function...\\n\";\nfunction call_fact()\n{\n  echo \"(it should break at 5...)\\n\";\n  for ($i=0; $i<=10; $i++) {\n    if ($i == 5) break;\n    $n=factorial($i);\n    echo \"factorial($i) = $n\\n\";\n  }\n}\nfunction return4() { return 4; }\nfunction return7() { return 7; }\nfor ($k=0; $k<10; $k++) {\n  call_fact();\n}\necho \"------\\n\";\n$result = factorial(factorial(3));\necho \"$result\\n\";\n$result=factorial2(return4(),return7());\necho \"$result\\n\";\nfunction andi($i, $j)\n{\n    for ($k=$i ; $k<=$j ; $k++) {\n        if ($k >5) continue;\n        echo \"$k\\n\";\n    }\n}\nandi (3,10);\n?>")).toMatchSnapshot();
  });
});
