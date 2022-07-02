// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/mail/mail_basic6.phpt
  it("Test mail() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing mail() : basic functionality ***\\n\";\n// Valid header\n$to = 'user@example.com';\n$subject = 'Test Subject';\n$message = 'A Message';\n$additional_headers = \"HEAD1: a\\r\\nHEAD2: b\\r\\n\";\n$outFile = \"mailBasic6.out\";\n@unlink($outFile);\necho \"-- Valid Header --\\n\";\n// Calling mail() with all additional headers\nvar_dump( mail($to, $subject, $message, $additional_headers) );\necho file_get_contents($outFile);\nunlink($outFile);\n// Valid header\n$additional_headers = \"HEAD1: a\\nHEAD2: b\\n\";\n@unlink($outFile);\necho \"-- Valid Header --\\n\";\n// Calling mail() with all additional headers\nvar_dump( mail($to, $subject, $message, $additional_headers) );\necho @file_get_contents($outFile);\n@unlink($outFile);\n// Valid header\n// \\r is accepted as valid. This may be changed to invalid.\n$additional_headers = \"HEAD1: a\\rHEAD2: b\\r\";\n@unlink($outFile);\necho \"-- Valid Header --\\n\";\n// Calling mail() with all additional headers\nvar_dump( mail($to, $subject, $message, $additional_headers) );\necho @file_get_contents($outFile);\n@unlink($outFile);\n//===============================================================================\n// Invalid header\n$additional_headers = \"\\nHEAD1: a\\nHEAD2: b\\n\";\n@unlink($outFile);\necho \"-- Invalid Header - preceding newline--\\n\";\n// Calling mail() with all additional headers\nvar_dump( mail($to, $subject, $message, $additional_headers) );\necho @file_get_contents($outFile);\n@unlink($outFile);\n// Invalid header\n$additional_headers = \"\\rHEAD1: a\\nHEAD2: b\\r\";\n@unlink($outFile);\necho \"-- Invalid Header - preceding newline--\\n\";\n// Calling mail() with all additional headers\nvar_dump( mail($to, $subject, $message, $additional_headers) );\necho @file_get_contents($outFile);\n@unlink($outFile);\n// Invalid header\n$additional_headers = \"\\r\\nHEAD1: a\\r\\nHEAD2: b\\r\\n\";\n@unlink($outFile);\necho \"-- Invalid Header - preceding newline--\\n\";\n// Calling mail() with all additional headers\nvar_dump( mail($to, $subject, $message, $additional_headers) );\necho @file_get_contents($outFile);\n@unlink($outFile);\n// Invalid header\n$additional_headers = \"\\r\\n\\r\\nHEAD1: a\\r\\nHEAD2: b\\r\\n\";\n@unlink($outFile);\necho \"-- Invalid Header - preceding newline--\\n\";\n// Calling mail() with all additional headers\nvar_dump( mail($to, $subject, $message, $additional_headers) );\necho @file_get_contents($outFile);\n@unlink($outFile);\n// Invalid header\n$additional_headers = \"\\n\\nHEAD1: a\\r\\nHEAD2: b\\r\\n\";\n@unlink($outFile);\necho \"-- Invalid Header - preceding newline--\\n\";\n// Calling mail() with all additional headers\nvar_dump( mail($to, $subject, $message, $additional_headers) );\necho @file_get_contents($outFile);\n@unlink($outFile);\n// Invalid header\n$additional_headers = \"\\r\\rHEAD1: a\\r\\nHEAD2: b\\r\\n\";\n@unlink($outFile);\necho \"-- Invalid Header - preceding newline--\\n\";\n// Calling mail() with all additional headers\nvar_dump( mail($to, $subject, $message, $additional_headers) );\necho @file_get_contents($outFile);\n@unlink($outFile);\n// Invalid header\n$additional_headers = \"HEAD1: a\\r\\n\\r\\nHEAD2: b\\r\\n\";\n@unlink($outFile);\necho \"-- Invalid Header - multiple newlines in the middle --\\n\";\n// Calling mail() with all additional headers\nvar_dump( mail($to, $subject, $message, $additional_headers) );\necho @file_get_contents($outFile);\n@unlink($outFile);\n// Invalid header\n$additional_headers = \"HEAD1: a\\r\\n\\nHEAD2: b\\r\\n\";\n@unlink($outFile);\necho \"-- Invalid Header - multiple newlines in the middle --\\n\";\n// Calling mail() with all additional headers\nvar_dump( mail($to, $subject, $message, $additional_headers) );\necho @file_get_contents($outFile);\n@unlink($outFile);\n// Invalid header\n$additional_headers = \"HEAD1: a\\n\\nHEAD2: b\\r\\n\";\n@unlink($outFile);\necho \"-- Invalid Header - multiple newlines in the middle --\\n\";\n// Calling mail() with all additional headers\nvar_dump( mail($to, $subject, $message, $additional_headers) );\necho @file_get_contents($outFile);\n@unlink($outFile);\n// Invalid header\n$additional_headers = \"HEAD1: a\\r\\rHEAD2: b\\r\\n\";\n@unlink($outFile);\necho \"-- Invalid Header - multiple newlines in the middle --\\n\";\n// Calling mail() with all additional headers\nvar_dump( mail($to, $subject, $message, $additional_headers) );\necho @file_get_contents($outFile);\n@unlink($outFile);\n// Invalid header\n$additional_headers = \"HEAD1: a\\n\\rHEAD2: b\\r\\n\";\n@unlink($outFile);\necho \"-- Invalid Header - multiple newlines in the middle --\\n\";\n// Calling mail() with all additional headers\nvar_dump( mail($to, $subject, $message, $additional_headers) );\necho @file_get_contents($outFile);\n@unlink($outFile);\n// Invalid header\n$additional_headers = \"HEAD1: a\\n\\r\\nHEAD2: b\\r\\n\";\n@unlink($outFile);\necho \"-- Invalid Header - multiple newlines in the middle --\\n\";\n// Calling mail() with all additional headers\nvar_dump( mail($to, $subject, $message, $additional_headers) );\necho @file_get_contents($outFile);\n@unlink($outFile);\n// Invalid header\n// Invalid, but PHP_FUNCTION(mail) trims newlines\n$additional_headers = \"HEAD1: a\\r\\nHEAD2: b\\r\\n\\n\";\n@unlink($outFile);\necho \"-- Invalid Header - trailing newlines --\\n\";\n// Calling mail() with all additional headers\nvar_dump( mail($to, $subject, $message, $additional_headers) );\necho @file_get_contents($outFile);\n@unlink($outFile);\n// Invalid header\n// Invalid, but PHP_FUNCTION(mail) trims newlines\n$additional_headers = \"HEAD1: a\\r\\nHEAD2: b\\n\\n\";\n@unlink($outFile);\necho \"-- Invalid Header - trailing newlines --\\n\";\n// Calling mail() with all additional headers\nvar_dump( mail($to, $subject, $message, $additional_headers) );\necho @file_get_contents($outFile);\n@unlink($outFile);\n// Invalid header\n// Invalid, but PHP_FUNCTION(mail) trims newlines\n$additional_headers = \"HEAD1: a\\r\\nHEAD2: b\\n\";\n@unlink($outFile);\necho \"-- Invalid Header - trailing newlines --\\n\";\n// Calling mail() with all additional headers\nvar_dump( mail($to, $subject, $message, $additional_headers) );\necho @file_get_contents($outFile);\n@unlink($outFile);\n// Invalid header\n// Invalid, but PHP_FUNCTION(mail) trims newlines\n$additional_headers = \"HEAD1: a\\r\\nHEAD2: b\\r\";\n@unlink($outFile);\necho \"-- Invalid Header - trailing newlines --\\n\";\n// Calling mail() with all additional headers\nvar_dump( mail($to, $subject, $message, $additional_headers) );\necho @file_get_contents($outFile);\n@unlink($outFile);\n?>")).toMatchSnapshot();
  });
});
