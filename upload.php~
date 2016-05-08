<?php
if (isset($_POST['submit'])) {
    $j = 0; //Variable for indexing uploaded image

	$target_path = "uploads/"; //Declaring Path for uploaded images
    $listDeleteImg = $_POST['delete_img'];

    for ($i = 0; $i < count($_FILES['imgMulti']['name']); $i++){//loop to get individual element from the array

        $validextensions = array("jpeg", "jpg", "png");  //Extensions which are allowed
        $ext = explode('.', basename($_FILES['imgMulti']['name'][$i]));//explode file name from dot(.)
        $file_extension = end($ext); //store extensions in the variable
		$target_pathNew = $target_path . md5(uniqid()) . "." . $ext[count($ext) - 1];//set the target path with a new name of image
        
        $getName = $_FILES['imgMulti']['name'][$i];
        $getSize = $_FILES['imgMulti']['size'][$i];
        $getPush = $getSize.'-'.$getName;
        $findImg = strpos($listDeleteImg,$getPush);

        if($findImg !== false) {
            $listDeleteImg = preg_replace("/$getPush/","",$listDeleteImg,1);
        } else {
            // Not found
            $j = $j + 1;//increment the number of uploaded images according to the files in array
            if (($_FILES["imgMulti"]["size"][$i] < 1000000000) && in_array($file_extension, $validextensions)) {
                if (move_uploaded_file($_FILES['imgMulti']['tmp_name'][$i], $target_pathNew)) {//if file moved to uploads folder
                    echo $j. ').<span id="noerror">Image uploaded successfully!.</span><br/><br/>';
                } else {//if file was not moved.
                    echo $j. ').<span id="error">please try again!.</span><br/><br/>';
                }

            } else {//if file size and file type was incorrect.
                echo $j. ').<span id="error">***Invalid file Size or Type***</span><br/><br/>';
            }
        } 
    }
}
?>
