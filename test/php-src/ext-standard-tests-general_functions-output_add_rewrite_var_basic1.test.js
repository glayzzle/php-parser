// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/output_add_rewrite_var_basic1.phpt
  it("Test output_add_rewrite_var() function basic feature", function () {
    expect(parser.parseCode("<?php\n    ob_start();\n// Common setting\nini_set('url_rewriter.hosts', 'php.net,www.php.net');\nini_set('session.trans_sid_hosts', 'php.net,www.php.net');\nini_set('session.use_only_cookies', 0);\nini_set('session.use_cookies', 0);\nini_set('session.use_strict_mode', 0);\nsession_id('testid');\noutput_add_rewrite_var('<name>', '<value>');\n?>\nWithout session\n<a href=\"\"> </a>\n<a href=\"./foo.php\"> </a>\n<a href=\"//php.net/foo.php\"> </a>\n<a href=\"http://php.net/foo.php\"> </a>\n<a href=\"bad://php.net/foo.php\"> </a>\n<a href=\"//www.php.net/foo.php\"> </a>\n<form method=\"get\"> </form>\n<form action=\"./foo.php\" method=\"get\">\n<form action=\"//php.net/bar.php\" method=\"get\">\n<form action=\"http://php.net/bar.php\" method=\"get\">\n<form action=\"bad://php.net/bar.php\" method=\"get\">\n<form action=\"//www.php.net/bar.php\" method=\"get\">\n<?php\nini_set('session.use_trans_sid', 0);\nsession_start();\noutput_add_rewrite_var('<name>', '<value>');\n?>\nTest use_trans_sid=0\n<a href=\"\"> </a>\n<a href=\"./foo.php\"> </a>\n<a href=\"//php.net/foo.php\"> </a>\n<a href=\"http://php.net/foo.php\"> </a>\n<a href=\"bad://php.net/foo.php\"> </a>\n<a href=\"//www.php.net/foo.php\"> </a>\n<form method=\"get\"> </form>\n<form action=\"./foo.php\" method=\"get\"> </form>\n<form action=\"//php.net/bar.php\" method=\"get\"> </form>\n<form action=\"http://php.net/bar.php\" method=\"get\"> </form>\n<form action=\"bad://php.net/bar.php\" method=\"get\"> </form>\n<form action=\"//www.php.net/bar.php\" method=\"get\"> </form>\n<?php\nsession_commit();\nini_set('session.use_trans_sid', 1);\noutput_reset_rewrite_vars();\nsession_start();\noutput_add_rewrite_var('<NAME>', '<VALUE>');\n?>\nTest use_trans_sid=1\n<a href=\"\"> </a>\n<a href=\"./foo.php\"> </a>\n<a href=\"//php.net/foo.php\"> </a>\n<a href=\"http://php.net/foo.php\"> </a>\n<a href=\"bad://php.net/foo.php\"> </a>\n<a href=\"//www.php.net/foo.php\"> </a>\n<form method=\"get\"> </form>\n<form action=\"./foo.php\" method=\"get\"> </form>\n<form action=\"//php.net/bar.php\" method=\"get\"> </form>\n<form action=\"http://php.net/bar.php\" method=\"get\"> </form>\n<form action=\"bad://php.net/bar.php\" method=\"get\"> </form>\n<form action=\"//www.php.net/bar.php\" method=\"get\"> </form>")).toMatchSnapshot();
  });
});
