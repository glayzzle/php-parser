// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/009.phpt
  it("strftime() and gmstrftime() tests", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('Asia/Jerusalem');\n$t = mktime(0,0,0, 6, 27, 2006);\nvar_dump(strftime(\"\"));\nvar_dump(strftime(\"%a %A %b %B %c %C %d %D %e %g %G %h %H %I %j %m %M %n %p %r %R %S %t %T %u %U %V %W %w %x %X %y %Y %Z %z %%\", $t));\nvar_dump(strftime(\"%%q %%a\", $t));\nvar_dump(strftime(\"blah\", $t));\nvar_dump(gmstrftime(\"\"));\nvar_dump(gmstrftime(\"%a %A %b %B %c %C %d %D %e %g %G %h %H %I %j %m %M %n %p %r %R %S %t %T %u %U %V %W %w %x %X %y %Y %Z %z %%\", $t));\nvar_dump(gmstrftime(\"%%q %%a\", $t));\nvar_dump(gmstrftime(\"blah\", $t));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
