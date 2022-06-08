// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug71826.phpt
  it("Bug #71826 (DateTime::diff confuse on timezone 'Asia/Tokyo')", function () {
    expect(parser.parseCode("<?php\n// Asia/Tokyo ...something wrong\ndate_default_timezone_set('Asia/Tokyo');\n$a = (new DateTime('2015-2-1'))->diff(new DateTime('2015-3-1'));\necho \"a(Asia/Tokyo): 2015-2-1 <--> 2015-3-1\\n\";\nvar_dump($a->m, $a->d);\n$b = (new DateTime('2015-3-1'))->diff(new DateTime('2015-3-29'));\necho \"\\nb(Asia/Tokyo): 2015-3-1 <--> 2015-3-29\\n\";\nvar_dump($b->m, $b->d);\n$c = (new DateTime('2015-4-1'))->diff(new DateTime('2015-4-29'));\necho \"\\nc(Asia/Tokyo): 2015-4-1 <--> 2015-4-29\\n\";\nvar_dump($c->m, $c->d);\n?>")).toMatchSnapshot();
  });
});
