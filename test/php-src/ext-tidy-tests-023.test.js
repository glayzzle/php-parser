// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tidy/tests/023.phpt
  it("tidy and tidyNode OO", function () {
    expect(parser.parseCode("<?php\n//test leaks here:\nnew tidy();\nvar_dump(new tidy());\necho \"-------\\n\";\n$tidy = new tidy();\n$tidy->parseString('<html><?php echo \"xpto;\" ?></html>');\nvar_dump(tidy_get_root($tidy)->child[0]->isHtml());\nvar_dump(tidy_get_root($tidy)->child[0]->child[0]->isPHP());\nvar_dump(tidy_get_root($tidy)->child[0]->child[0]->isAsp());\nvar_dump(tidy_get_root($tidy)->child[0]->child[0]->isJste());\nvar_dump(tidy_get_root($tidy)->child[0]->child[0]->type === TIDY_NODETYPE_PHP);\nvar_dump(tidy_get_root($tidy)->child[0]->hasChildren());\nvar_dump(tidy_get_root($tidy)->child[0]->child[0]->hasChildren());\n?>")).toMatchSnapshot();
  });
});
