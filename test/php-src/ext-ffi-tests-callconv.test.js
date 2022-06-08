// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/callconv.phpt
  it("Different calling conventions", function () {
    expect(parser.parseCode("<?php\n$header = <<<HEADER\nvoid __cdecl cdecl_func(int arg1, double arg2, char arg3);\nvoid __stdcall stdcall_func(int arg1, double arg2, char arg3);\nvoid __fastcall fastcall_func(int arg1, double arg2, char arg3);\nHEADER;\n$headername = __DIR__ . '/callconv.h';\n$dllname = __DIR__ . \"/callconv_x86.dll\";\n$ffi1 = FFI::cdef($header, $dllname);\n$ffi1->cdecl_func(1, 2.3, 'a');\n$ffi1->stdcall_func(4, 5.6, 'b');\n$ffi1->fastcall_func(7, 8.9, 'c');\nfile_put_contents($headername, \"#define FFI_LIB \\\"$dllname\\\"\\n$header\");\n$ffi2 = FFI::load($headername);\n$ffi2->cdecl_func(2, 3.4, 'a');\n$ffi2->stdcall_func(5, 6.7, 'b');\n$ffi2->fastcall_func(8, 9.1, 'c');\n?>")).toMatchSnapshot();
  });
});
