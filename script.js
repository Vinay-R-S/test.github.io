document.addEventListener('DOMContentLoaded', function() {
    var downloadBtns = document.querySelectorAll('.mdwd');
    var images = document.querySelectorAll('.mpic');

    downloadBtns.forEach(function(btn, index) {
        btn.addEventListener('click', function() {
            var imageUrl = images[index].src;
            var fileName = 'downloaded_image_' + index + '.jpg'; // Unique file name based on index

            var link = document.createElement('a');
            link.href = imageUrl;
            link.download = fileName;

            document.body.appendChild(link);
            link.click();

            document.body.removeChild(link);
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var downloadBtns = document.querySelectorAll('.dwd');
    var images = document.querySelectorAll('.pic4k');

    downloadBtns.forEach(function(btn, index) {
        btn.addEventListener('click', function() {
            var imageUrl = images[index].src;
            var fileName = 'downloaded_image_' + index + '.jpg'; // Unique file name based on index

            var link = document.createElement('a');
            link.href = imageUrl;
            link.download = fileName;

            document.body.appendChild(link);
            link.click();

            document.body.removeChild(link);
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    
    var likeBtns = document.querySelectorAll('.mlike');
    var likeCounters = Array.from({ length: likeBtns.length }).fill(0); // Array to store like counters
    var isLiked = Array.from({ length: likeBtns.length }).fill(false); // Array to track like states\
    

    likeBtns.forEach(function(likeBtn, index) { 
        likeBtn.addEventListener('click', function() {
            if (!isLiked[index]) {
                likeCounters[index]++;
                likeBtn.value = 'Unlike \u2764'; // Change button text to "Unlike"
                likeBtn.style.backgroundColor = 'deeppink';
            } else {
                likeCounters[index]--;
                likeBtn.value = 'Like \u2764'; // Change button text back to "Like"
                likeBtn.style.backgroundColor = 'black';
            }
            
            isLiked[index] = !isLiked[index]; // Toggle the like state
            alert(likeCounters);
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var likeBtns = document.querySelectorAll('.like ');
    var likeCounters = Array.from({ length: likeBtns.length }).fill(0); // Array to store like counters
    var isLiked = Array.from({ length: likeBtns.length }).fill(false); // Array to track like states

    likeBtns.forEach(function(likeBtn, index) {
        likeBtn.addEventListener('click', function() {
            if (!isLiked[index]) {
                likeCounters[index]++;
                likeBtn.value = 'Unlike \u2764'; // Change button text to "Unlike"
                likeBtn.style.backgroundColor = 'deeppink';
            } else {
                likeCounters[index]--;
                likeBtn.value = 'Like \u2764'; // Change button text back to "Like"
                likeBtn.style.backgroundColor = 'black';
            }
            
            isLiked[index] = !isLiked[index]; // Toggle the like state
        
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('.mpic');

    images.forEach(function(img) {
        img.addEventListener('click', function() {
            if (img.requestFullscreen) {
                img.requestFullscreen();
            } else if (img.mozRequestFullScreen) { /* Firefox */
                img.mozRequestFullScreen();
            } else if (img.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
                img.webkitRequestFullscreen();
            } else if (img.msRequestFullscreen) { /* IE/Edge */
                img.msRequestFullscreen();
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('.pic4k');

    images.forEach(function(img) {
        img.addEventListener('click', function() {
            if (img.requestFullscreen) {
                img.requestFullscreen();
            } else if (img.mozRequestFullScreen) { /* Firefox */
                img.mozRequestFullScreen();
            } else if (img.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
                img.webkitRequestFullscreen();
            } else if (img.msRequestFullscreen) { /* IE/Edge */
                img.msRequestFullscreen();
            }
        });
    });
});