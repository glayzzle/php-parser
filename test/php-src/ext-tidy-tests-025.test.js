// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tidy/tests/025.phpt
  it("tidyNode tests", function () {
    expect(parser.parseCode("<?php\n$tidy=tidy_parse_string('<% %>', array('newline' => 'LF'));\nvar_dump($tidy->Root()->child[0]->isAsp());\n$tidy=tidy_parse_string('<# #>',  array('newline' => 'LF'));\nvar_dump($tidy->Root()->child[0]->isJste());\n$tidy=tidy_parse_string('<html><body>text</body></html>');\nvar_dump($tidy->Root()->child[0]->child[1]->child[0]->isText());\n$tidy=tidy_parse_string('<html><body><!-- comment --></body></html>', array('newline' => 'LF'));\n$n = $tidy->Root()->child[0]->child[1]->child[0];\nvar_dump($n->isComment());\nvar_dump((string)$n);\nvar_dump((bool)$n);\nvar_dump((double)$n);\nvar_dump((int)$n);\nvar_dump($tidy->Root()->child[0]->child[0]->hasSiblings());\n?>")).toMatchSnapshot();
  });
});
