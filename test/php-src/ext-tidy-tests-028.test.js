// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tidy/tests/028.phpt
  it("tidyNode::getParent()", function () {
    expect(parser.parseCode("<?php\n$x = tidy_parse_string(\"<body><div>Content</div></body>\");\nvar_dump($x->body()->child[0]->name);\nvar_dump($x->body()->child[0]->getParent()->name);\nvar_dump($x->root()->getParent());\n?>")).toMatchSnapshot();
  });
});
