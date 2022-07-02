// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/syntax_errors.phpt
  it("Detailed reporting on specific types of syntax errors", function () {
    expect(parser.parseCode("<?php\n$badCode = [\n  \"if(1 > 2\",                   /* unclosed ( */\n  \"[1, 2,\",                     /* unclosed [ */\n  \"if(1) { echo 'hello'; \",     /* unclosed { */\n  \"(1 + 2));\",                  /* too many ) */\n  \"[1, 2]]\",                    /* too many ] */\n  \"if (1) {  }  }\",             /* too many } */\n  \"(1 + 2];\",                   /* ] doesn't match ( */\n  \"[1, 2)];\",                   /* ) doesn't match [ */\n  \"if(1) { echo 'a'; )}\",       /* ) doesn't match { */\n  /* separately test cases where the faulty construct spans multiple lines,\n     since the error message should refer to the starting line in those cases */\n  \"if(1 > 2) {\\n  echo '1';\",   /* unclosed (, spans multiple lines */\n  \"[1,\\n2,\\n3,\",                /* unclosed [, spans multiple lines */\n  \"{\\n  echo '1';\\n echo '2';\", /* unclosed {, spans multiple lines */\n  \"(1 +\\n 2 +\\n 3))\",           /* too many ), spans multiple lines */\n  \"[1,\\n2,\\n3]];\",              /* too many ], spans multiple lines */\n  \"if (1)\\n  {\\n    }}\",        /* too many }, spans multiple lines */\n  \"(1 +\\n\\n  2])\",              /* ] doesn't match (, spans multiple lines */\n  \"[1,\\n2,\\n3)]\",               /* ) doesn't match [, spans multiple lines */\n  \"if(1) {\\n  echo 'a';\\n)}\",   /* ) doesn't match {, spans multiple lines */\n  ];\nforeach ($badCode as $code) {\n  try {\n    eval($code);\n  } catch (ParseError $e) {\n    echo $e->getMessage(), \"\\n\";\n  }\n}\necho \"==DONE==\\n\";\n?>")).toMatchSnapshot();
  });
});
