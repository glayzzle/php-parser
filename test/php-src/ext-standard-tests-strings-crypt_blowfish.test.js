// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/crypt_blowfish.phpt
  it("Official blowfish tests (http://cvsweb.openwall.com/cgi/cvsweb.cgi/Owl/packages/glibc/crypt_blowfish/wrapper.c)", function () {
    expect(parser.parseCode("<?php\n$tests =array(\n    array('$2a$05$CCCCCCCCCCCCCCCCCCCCC.E5YPO9kmyuRGyh0XouQYb4YMJKvyOeW', 'U*U'),\n    array('$2a$05$CCCCCCCCCCCCCCCCCCCCC.VGOzA784oUp/Z0DY336zx7pLYAy0lwK', 'U*U*'),\n    array('$2a$05$XXXXXXXXXXXXXXXXXXXXXOAcXxm9kjPGEMsLznoKqmqw7tc8WCx4a', 'U*U*U'),\n    array('$2a$05$abcdefghijklmnopqrstuu5s2v8.iXieOjg/.AySBTTZIIVFJeBui', '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789chars after 72 are ignored'),\n    array('$2x$05$/OK.fbVrR/bpIqNJ5ianF.CE5elHaaO4EbggVDjb8P19RukzXSM3e', \"\\xa3\"),\n    array('$2x$05$/OK.fbVrR/bpIqNJ5ianF.CE5elHaaO4EbggVDjb8P19RukzXSM3e', \"\\xff\\xff\\xa3\"),\n    array('$2y$05$/OK.fbVrR/bpIqNJ5ianF.CE5elHaaO4EbggVDjb8P19RukzXSM3e', \"\\xff\\xff\\xa3\"),\n    array('$2a$05$/OK.fbVrR/bpIqNJ5ianF.nqd1wy.pTMdcvrRWxyiGL2eMz.2a85.', \"\\xff\\xff\\xa3\"),\n    array('$2b$05$/OK.fbVrR/bpIqNJ5ianF.CE5elHaaO4EbggVDjb8P19RukzXSM3e', \"\\xff\\xff\\xa3\"),\n    array('$2y$05$/OK.fbVrR/bpIqNJ5ianF.Sa7shbm4.OzKpvFnX1pQLmQW96oUlCq', \"\\xa3\"),\n    array('$2a$05$/OK.fbVrR/bpIqNJ5ianF.Sa7shbm4.OzKpvFnX1pQLmQW96oUlCq', \"\\xa3\"),\n    array('$2b$05$/OK.fbVrR/bpIqNJ5ianF.Sa7shbm4.OzKpvFnX1pQLmQW96oUlCq', \"\\xa3\"),\n    array('$2x$05$/OK.fbVrR/bpIqNJ5ianF.o./n25XVfn6oAPaUvHe.Csk4zRfsYPi', \"1\\xa3345\"),\n    array('$2x$05$/OK.fbVrR/bpIqNJ5ianF.o./n25XVfn6oAPaUvHe.Csk4zRfsYPi', \"\\xff\\xa3345\"),\n    array('$2x$05$/OK.fbVrR/bpIqNJ5ianF.o./n25XVfn6oAPaUvHe.Csk4zRfsYPi', \"\\xff\\xa334\\xff\\xff\\xff\\xa3345\"),\n    array('$2y$05$/OK.fbVrR/bpIqNJ5ianF.o./n25XVfn6oAPaUvHe.Csk4zRfsYPi', \"\\xff\\xa334\\xff\\xff\\xff\\xa3345\"),\n    array('$2a$05$/OK.fbVrR/bpIqNJ5ianF.ZC1JEJ8Z4gPfpe1JOr/oyPXTWl9EFd.', \"\\xff\\xa334\\xff\\xff\\xff\\xa3345\"),\n    array('$2y$05$/OK.fbVrR/bpIqNJ5ianF.nRht2l/HRhr6zmCp9vYUvvsqynflf9e', \"\\xff\\xa3345\"),\n    array('$2a$05$/OK.fbVrR/bpIqNJ5ianF.nRht2l/HRhr6zmCp9vYUvvsqynflf9e', \"\\xff\\xa3345\"),\n    array('$2a$05$/OK.fbVrR/bpIqNJ5ianF.6IflQkJytoRVc1yuaNtHfiuq.FRlSIS', \"\\xa3ab\"),\n    array('$2x$05$/OK.fbVrR/bpIqNJ5ianF.6IflQkJytoRVc1yuaNtHfiuq.FRlSIS', \"\\xa3ab\"),\n    array('$2y$05$/OK.fbVrR/bpIqNJ5ianF.6IflQkJytoRVc1yuaNtHfiuq.FRlSIS', \"\\xa3ab\"),\n    array('$2x$05$6bNw2HLQYeqHYyBfLMsv/OiwqTymGIGzFsA4hOTWebfehXHNprcAS', \"\\xd1\\x91\"),\n    array('$2x$05$6bNw2HLQYeqHYyBfLMsv/O9LIGgn8OMzuDoHfof8AQimSGfcSWxnS', \"\\xd0\\xc1\\xd2\\xcf\\xcc\\xd8\"),\n    array('$2a$05$/OK.fbVrR/bpIqNJ5ianF.swQOIzjOiJ9GHEPuhEkvqrUyvWhEMx6', \"\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaa\\xaachars after 72 are ignored as usual\"),\n    array('$2a$05$/OK.fbVrR/bpIqNJ5ianF.R9xrDjiycxMbQE2bp.vgqlYpW5wx2yy', \"\\xaa\\x55\\xaa\\x55\\xaa\\x55\\xaa\\x55\\xaa\\x55\\xaa\\x55\\xaa\\x55\\xaa\\x55\\xaa\\x55\\xaa\\x55\\xaa\\x55\\xaa\\x55\\xaa\\x55\\xaa\\x55\\xaa\\x55\\xaa\\x55\\xaa\\x55\\xaa\\x55\\xaa\\x55\\xaa\\x55\\xaa\\x55\\xaa\\x55\\xaa\\x55\\xaa\\x55\\xaa\\x55\\xaa\\x55\\xaa\\x55\\xaa\\x55\\xaa\\x55\\xaa\\x55\\xaa\\x55\\xaa\\x55\\xaa\\x55\\xaa\\x55\\xaa\\x55\\xaa\\x55\"),\n    array('$2a$05$/OK.fbVrR/bpIqNJ5ianF.9tQZzcJfm3uj2NvJ/n5xkhpqLrMpWCe', \"\\x55\\xaa\\xff\\x55\\xaa\\xff\\x55\\xaa\\xff\\x55\\xaa\\xff\\x55\\xaa\\xff\\x55\\xaa\\xff\\x55\\xaa\\xff\\x55\\xaa\\xff\\x55\\xaa\\xff\\x55\\xaa\\xff\\x55\\xaa\\xff\\x55\\xaa\\xff\\x55\\xaa\\xff\\x55\\xaa\\xff\\x55\\xaa\\xff\\x55\\xaa\\xff\\x55\\xaa\\xff\\x55\\xaa\\xff\\x55\\xaa\\xff\\x55\\xaa\\xff\\x55\\xaa\\xff\\x55\\xaa\\xff\\x55\\xaa\\xff\\x55\\xaa\\xff\"),\n    array('$2a$05$CCCCCCCCCCCCCCCCCCCCC.7uG0VCzI2bS7j6ymqJi9CdcdxiRTWNy', ''),\n);\n$tests2 = array(\n    array('$2a$03$CCCCCCCCCCCCCCCCCCCCC.', '*0'),\n    array('$2a$32$CCCCCCCCCCCCCCCCCCCCC.', '*0'),\n    array('$2c$05$CCCCCCCCCCCCCCCCCCCCC.', '*0'),\n    array('$2z$05$CCCCCCCCCCCCCCCCCCCCC.', '*0'),\n    array('$2`$05$CCCCCCCCCCCCCCCCCCCCC.', '*0'),\n    array('$2{$05$CCCCCCCCCCCCCCCCCCCCC.', '*0'),\n    array('*0', '*1'),\n);\n$i=0;\nforeach($tests as $test) {\n  $result = crypt($test[1], $test[0]);\n  if($result === $test[0]) {\n    echo \"$i. OK\\n\";\n  } else {\n    echo \"$i. Not OK: $test[0] $result\\n\";\n  }\n  $i++;\n}\nforeach($tests2 as $test) {\n  $result = crypt('', $test[0]);\n  if($result === $test[1]) {\n    echo \"$i. OK\\n\";\n  } else {\n    echo \"$i. Not OK: $test[0] $result\\n\";\n  }\n  $i++;\n}\n?>")).toMatchSnapshot();
  });
});
