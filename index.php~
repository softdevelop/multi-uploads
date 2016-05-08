<!DOCTYPE html>
<html>
<head>

	<title>Upload Multiple Images Using jquery and PHP</title>
    
	<!---Including jQuery and fonts from google -->
    <link href='http://fonts.googleapis.com/css?family=Alegreya' rel='stylesheet' type='text/css'>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

    <!--- Including JS File -->
    <script src="styles/js/bootstrap.min.js"></script>
    <script src="styles/js/script.js"></script>

	<!--- Including CSS File  -->
    <link rel="stylesheet" type="text/css" href="styles/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="styles/css/style.css">
</head>
<body>
    <div class="container">
        <div class="row">
            <div id="maindiv" class="col-sm-12 col-xs-12">
                <div id="formDiv">
                    <i class="glyphicon glyphicon-cloud-upload"></i>
                    <h2>Multiple Image Upload</h2>
                    <br>
                    <div class="form_upload">
                        <form enctype="multipart/form-data" action="" method="post">
                            <input type="hidden" value="" name="delete_img" id="delete_img">
                            <div class="picture"><i class="glyphicon glyphicon-picture"></i>Choose image to upload</div>
                            <div class="fileDivParent">
                                <input name="imgMulti[]" type="file" id="imgMulti" class="form-control imgMultiple" multiple="true" />
                                <div class="test"></div>
                            </div>
                            <div class="divider">
                                <input type="button" id="add_more_img" class="upload_img" value="+ Add another images"/>
                                <input type="submit" value="Submit" name="submit" id="submit" class="upload_img"/>
                            </div>
                        </form>
                    </div>
                    <br/>
                    <br/>
    				<!--- Including PHP Script -->
                    <?php include "upload.php"; ?>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
