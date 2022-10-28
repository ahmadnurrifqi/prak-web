<?php 
    require 'config.php';

    date_default_timezone_set("Asia/Makassar");
    // $row=mysqli_fetch_array($result);
    
    $query = "SELECT * FROM meme";
    $result = $db->query($query);
    if (isset($_GET['id'])) {
    }
?>
<?=template_head('delete')?>

<div class="content-delete">
	<h2>Erorr Delete Page gagal</h2>
    <a href="meme.php">Back</a>
</div>