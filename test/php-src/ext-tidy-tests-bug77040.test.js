// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tidy/tests/bug77040.phpt
  it("Bug #77040 (tidyNode::isHtml() is completely broken)", function () {
    expect(parser.parseCode("<?php\n$tidy = new tidy;\n$tidy->parseString(\"<p>text</p><p><![CDATA[cdata]]></p>\");\n$p = $tidy->body()->child[0];\nvar_dump($p->type === TIDY_NODETYPE_START);\nvar_dump($p->isHtml());\n$text = $p->child[0];\nvar_dump($text->type === TIDY_NODETYPE_TEXT);\nvar_dump($text->isHtml());\n$cdata = $tidy->body()->child[1]->child[0];\nvar_dump($cdata->type === TIDY_NODETYPE_CDATA);\nvar_dump($cdata->isHtml());\n?>")).toMatchSnapshot();
  });
});
