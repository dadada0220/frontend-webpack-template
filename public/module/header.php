<?php include(__DIR__ . '/_config.php'); ?>

<!DOCTYPE html>
<html lang="ja">

<head>
  <?php include(__dir__ . '/head.php'); ?>
</head>

<body>

  <div class="l-wrapper">

    <header class="p-header" id="js-header">
      <div class="p-header__logo">
        <a href="<?php echo home_url(''); ?>">
          <img src="<?php echo $ASSETS_IMG . '_common/logo/logo.svg'; ?>" alt="<?php echo $SITE_NAME; ?>" width="180" height="27">
        </a>
      </div>
      <nav class="p-header__nav">
        <ul>
          <li>
            <a href="<?php echo home_url(''); ?>">TOP</a>
          </li>
          <li>
            <a href="<?php echo home_url('about'); ?>">About</a>
          </li>
        </ul>
      </nav>
    </header>

    <div class="l-main">