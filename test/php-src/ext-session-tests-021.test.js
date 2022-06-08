// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/021.phpt
  it("rewriter handles form and fieldset tags correctly", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\nini_set('session.trans_sid_hosts', 'php.net');\n$_SERVER['HTTP_HOST'] = 'php.net';\nsession_id(\"test021\");\nsession_start();\n?>\n<form action=\"//bad.net/do.php\">\n<fieldset>\n<form action=\"//php.net/do.php\">\n<fieldset>\n<?php\nob_flush();\nini_set(\"url_rewriter.tags\", \"a=href,area=href,frame=src,input=src,form=\");\n?>\n<form action=\"../do.php\">\n<fieldset>\n<?php\nob_flush();\nini_set(\"url_rewriter.tags\", \"a=href,area=href,frame=src,input=src,form=fakeentry\");\n?>\n<form action=\"/do.php\">\n<fieldset>\n<?php\nob_flush();\nini_set(\"url_rewriter.tags\", \"a=href,fieldset=,area=href,frame=src,input=src\");\n?>\n<form action=\"/foo/do.php\">\n<fieldset>\n<?php\nsession_destroy();\n?>")).toMatchSnapshot();
  });
});
