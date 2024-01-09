Task show youtube video as popup in shopify autoplay.

{% assign youtubeUrl = product.metafields.standard.featured_video %}
{% assign videoId = youtubeUrl | split: '/' | last %}


<ed-video-popup>
    <div class="video-popup-container">
        <div class="video-container" data-video-url="{{ product.metafields.standard.featured_video }}" video_src="https://www.youtube.com/embed/{{ videoId }}?autoplay=1&mute=0" video-id="{{ videoId }}">
       <iframe
         src="https://www.youtube.com/embed/{{ videoId }}?autoplay=1&mute=0"
         title="YouTube video player" frameborder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         allowfullscreen></iframe> 
         

          <!-- <iframe allowfullscreen allow="autoplay;" src="{{ product.metafields.standard.featured_video }}" ></iframe>  -->
        </div>
        <span class="btn-close">&#10005;</span>
    </div>
</ed-video-popup>



<script>
  document.addEventListener('DOMContentLoaded', function () {
    // Get the elements
    const btnOpen = document.querySelector('.btn-open');
    const playBtn = document.querySelector('.play-btn');
    const btnClose = document.querySelector('.btn-close');
    const videoPopup = document.querySelector('ed-video-popup');
    const videoContainer = document.querySelector('.video-container');

    // Function to handle opening the video
    function openVideo() {
      // Get the video source URL from the video-container attribute
      const videoSrc = videoContainer.getAttribute('video_src');

      // Create a new iframe element
      const iframe = document.createElement('iframe');
      iframe.setAttribute('src', videoSrc + '&autoplay=1&mute=1');
      iframe.setAttribute('title', 'YouTube video player');
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
      iframe.setAttribute('allowfullscreen', '');

      // Remove any existing iframes
      while (videoContainer.firstChild) {
        videoContainer.removeChild(videoContainer.firstChild);
      }

      // Append the new iframe to the video container
      videoContainer.appendChild(iframe);

      // Show the video popup
      videoPopup.style.display = 'block';
    }

    // Click events for .btn-open and .play-btn
    btnOpen.addEventListener('click', openVideo);
    playBtn.addEventListener('click', openVideo);

    // Click event for .btn-close
    btnClose.addEventListener('click', function () {
      // Remove the iframe from the video container
      const iframe = videoContainer.querySelector('iframe');
      if (iframe) {
        videoContainer.removeChild(iframe);
      }

      // Hide the video popup
      videoPopup.style.display = 'none';
    });
  });
</script>


