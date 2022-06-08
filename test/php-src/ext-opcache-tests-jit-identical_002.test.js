// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/identical_002.phpt
  it("JIT IDENTICAL: 002 Comparison with NaN", function () {
    expect(parser.parseCode("<?php\nfunction t() {\n    echo \"!\";\n    return true;\n}\nfunction f() {\n    echo \"!\";\n    return false;\n}\n$a = 0.0;\n$b = 0.0;\n$c = 1.0;\n$d = NAN;\nvar_dump($a === $b);\nvar_dump($a === $c);\nvar_dump($a === $d);\nvar_dump($a !== $b);\nvar_dump($a !== $c);\nvar_dump($a !== $d);\nvar_dump($a === $b ? 1 : 0);\nvar_dump($a === $c ? 1 : 0);\nvar_dump($a === $d ? 1 : 0);\nvar_dump($a !== $b ? 1 : 0);\nvar_dump($a !== $c ? 1 : 0);\nvar_dump($a !== $d ? 1 : 0);\nif ($a === $b) {\n    echo \"1\\n\";\n}\nif ($a === $c) {\n    echo \"2\\n\";\n}\nif ($a === $d) {\n    echo \"3\\n\";\n}\nif ($a !== $b) {\n    echo \"4\\n\";\n}\nif ($a !== $c) {\n    echo \"5\\n\";\n}\nif ($a !== $d) {\n    echo \"6\\n\";\n}\nif ($a === $b) {\n} else {\n    echo \"7\\n\";\n}\nif ($a === $c) {\n} else {\n    echo \"8\\n\";\n}\nif ($a === $d) {\n} else {\n    echo \"9\\n\";\n}\nif ($a !== $b) {\n} else {\n    echo \"A\\n\";\n}\nif ($a !== $c) {\n} else {\n    echo \"B\\n\";\n}\nif ($a !== $d) {\n} else {\n    echo \"C\\n\";\n}\nvar_dump($a === $b && t());\nvar_dump($a === $c && t());\nvar_dump($a === $d && t());\nvar_dump($a !== $b && t());\nvar_dump($a !== $c && t());\nvar_dump($a !== $d && t());\nvar_dump($a === $b || f());\nvar_dump($a === $c || f());\nvar_dump($a === $d || f());\nvar_dump($a !== $b || f());\nvar_dump($a !== $c || f());\nvar_dump($a !== $d || f());\n$a=NAN;\nvar_dump($a === $d);\nvar_dump($a !== $d);\nvar_dump($a === $d ? 1 : 0);\nvar_dump($a !== $d ? 1 : 0);\n?>")).toMatchSnapshot();
  });
});
