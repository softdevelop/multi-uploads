var imgno = 0;
var deleteImgs = '';
var noExecute = [];
$(document).ready(function() {

    //To add new input file field dynamically, on click of "Add Another Images" button below function will be executed
    $('#add_more_img').click(function() {
        $(this).parent().parent().children(".fileDivParent").children(".test").before($("<input/>", {name: 'imgMulti[]', type: 'file', id: 'imgMulti', multiple: 'true', class: 'form-control imgMultiple'})).fadeIn('slow');
    });

    //following function will executes on change event of file input to select different file

    $('body').on('change', '#imgMulti', function(evt){
        if (this.files) {
            var files = evt.target.files;
            for (var i = 0, f; f = files[i]; i++) {
                var reader = new FileReader();
                var crrfile = $(this);
                reader.onload = (function(theFile) {
                    var filesize = files[i].size;
                    var filename = files[i].name;
                    return function(e) {
                        imgno += 1;
                        noExecute[imgno] = 0;
                        crrfile.before("<div id='imageNo"+ imgno +"' class='imageNo'><div class='dev'><img class='preview_img" + imgno + "' class='img"+ imgno + "' src='"+e.target.result+"' filesize='"+filesize+"' filename='"+filename+"'/><span class='delete' alt='"+imgno+"'></span><br><p class='imgName'>"+filename+"</p></div></div>");
                        $(".delete").click(function() {//To delete image
                            var noImgDel = $(this).attr('alt');
                            if(noExecute[noImgDel]) {
                                return false;
                            } else {
                                noExecute[noImgDel]=1;
                                var strName = $(this).parent().children("img").attr( "filename" );
                                var strSize = $(this).parent().children("img").attr( "filesize" );
                                var strPush = strSize + "-" + strName ;

                                if( $('#delete_img').val() == ''){
                                    deleteImgs = strPush;
                                } else {
                                    deleteImgs = $('#delete_img').val() + ';' + strPush;
                                }

                                $('#delete_img').val(deleteImgs);

                                $(this).parent().parent().remove();
                            }
                        });
                    };
                })(f);

                reader.readAsDataURL(f);
                crrfile.hide();
            };
        }
    });

    //To preview image     
    function imageIsLoaded(e) {
        $('.preview_img' + imgno).attr('src', e.target.result);
    };

    $('#submit').click(function(e) {
        var name = $(":file").val();
        if (!name)
        {
            alert("Please select image");
            e.preventDefault();
        }
    });
});
