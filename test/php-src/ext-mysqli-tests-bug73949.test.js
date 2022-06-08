// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug73949.phpt
  it("Bug #73949 (leak in mysqli_fetch_object)", function () {
    expect(parser.parseCode("<?php\nrequire_once(\"connect.inc\");\nclass cc{\n    function __construct($c=null){\n    }\n};\n$i=mysqli_connect('p:'.$host, $user, $passwd, $db);\n$res=mysqli_query($i, \"SHOW STATUS LIKE 'Connections'\");\n$t=array(new stdClass);\nwhile($db= mysqli_fetch_object($res,'cc',$t)){}\nprint \"done!\";\n?>")).toMatchSnapshot();
  });
});
