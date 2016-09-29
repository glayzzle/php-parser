<?php
  use name\space;
  
  $a = $b + 5;
  $c = ($a / 5) * 10;
  $c += 5;
  if ($c > 10) {
    echo '>10';
  } else if ($c < 1) {
    echo '<1';
  } else if ($c >= 5) {
    echo '>=5';
  } else if ($c <= 2) {
    echo '<=2';
  } else if ($c != 2) {
    echo '!=2';
  } else if ($c <> 2) {
    echo '<>2';
  } else if ($c !== 2) {
    echo '!==2';
  } else if ($c == 2) {
    echo '==2';
  } else if ($c === 2) {
    echo '===2';
  }
  $d += $c >> 2;
  $d /= ($d << 2) - (4 ** 5);
  if ($d >>= 5) {
    $d *= $d << 2;
  } else if ($d <<= 5) {
    $d **= 2;
  }
  
  Require_Once(__file__); 
  for($i = 0; $i < 100; $i++) {
    $obj[$i]->${$var . $i} -= (int)$i ^ 5 + ($j--);
  }
  class::$property .= 'aa'.'bb';
  $foo %= 2 % 6;
  $foo &= 5;
  
  if ($foo && $bar || $baz) {
    $draw |= $tom & $jerry | ( string   )$mickey;
  }

  $var = $arg ? 0: 5;

  foreach(gen_three_nulls() as $key => $value) {
    $key = $bar ? null : $foo ! $baz ^ (int * $5);
    if ($key ^= 5) echo '!!';
  }
  

  function gen_three_nulls(...$arg) {
    foreach (range(1, 3) as $i) {
      yield;
    }
    
    $doc = <<<  'EOD'
  Hello World
'EOD';
    
    // only PHP7 can parse this :
    yield from seven_eight();
    return $i ?? $a;
  }
  
