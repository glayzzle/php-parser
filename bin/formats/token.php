<?php
  $tokens = token_get_all(
    file_get_contents($argv[1])
  );
  foreach($tokens as $p => $t) {
    if (is_array($t)) $tokens[$p][0] = token_name($t[0]);
  }
  echo json_encode( $tokens );
