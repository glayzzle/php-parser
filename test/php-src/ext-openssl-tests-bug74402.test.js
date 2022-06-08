// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/bug74402.phpt
  it("Bug #74402 (segfault on random_bytes, bin3hex, openssl_seal)", function () {
    expect(parser.parseCode("<?php\n$data = \"23153b1cf683cb16f8d71190a7c42f38fecda27c29a7bc8991c9f6a2a63602bf\";\n$key = array(\"-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqvjCLfpS0MyilIjR+IsH\nHPH8TqFUCw4kTAVmTy9SDZV9hHYY2EPgrlTd7gvMP/DWipvBD6Y5w2bPdAQoXr5D\nqEKAGkE+1El4hS8XyuOdYXSYTDH1HPSlFiGdgsnlkFcbh/fJyzIKBaGLnWxsjhiS\ndeiI7KuEkI9zt+X2r4KqFt/dhnXz0kcB1M7qyhQ6Rvijgjy/A1LsN4ZAREFLCEjb\n1AP9nk0QAUHWcG5MvbgsE20Pn4R5wFsMFBTvNmb34jHFREgR9j4DYcV5FFR3tKb8\n3XtjE9/kjfK29BSpiyXZs8PSqDhO00vh6txUB4VfkVUD2Bi93rxDeyALnCW7My+l\nYwIDAQAB\n-----END PUBLIC KEY-----\");\n$iv = '';\nvar_dump(strlen($data));\nvar_dump(openssl_seal($data, $sealed_data, $env_keys, $key, 'AES256', $iv));\n?>")).toMatchSnapshot();
  });
});
