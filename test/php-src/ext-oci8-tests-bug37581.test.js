// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/bug37581.phpt
  it("Bug #37581 (oci_bind_array_by_name clobbers input array when using SQLT_AFC, AVC)", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.\"/connect.inc\";\n$p1 = \"create or replace package BUG37581_PKG as\ntype str_array is table of char(2) index by binary_integer;\nprocedure array_bind(in_str in str_array, out_str out string);\nend BUG37581_PKG;\";\n$p2 = \"create or replace package body BUG37581_PKG as\n  procedure array_bind(in_str in str_array, out_str out string) is\n  begin\n    for i in 1 .. in_str.count loop\n      out_str := in_str(i);\n    end loop;\n  end array_bind;\nend BUG37581_PKG;\";\n$s1 = oci_parse($c, $p1);\n$s2 = oci_parse($c, $p2);\noci_execute($s1);\noci_execute($s2);\n$stmt           = oci_parse($c,'begin bug37581_pkg.array_bind(:in_arr, :out_str); end;');\n$strings        = array('A','B','C','D','E');\noci_bind_array_by_name($stmt,':in_arr',$strings,5,1,SQLT_AFC);\noci_bind_by_name($stmt,':out_str',$result,10);\noci_execute($stmt);\nvar_dump($strings);\noci_execute($stmt);\nvar_dump($strings);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
