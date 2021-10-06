/*
Purpose: 
  When watching a video youtube displays a list of suggested videos to watch.
  I often find this to be distracting.  This file will push those suggestions
  down 100% of view height (down to the next page).
  This will allow suggestions to still be viewed, but it requires some effort
  thus making concentration easier
*/
let ele = document.getElementById('secondary');
ele.style.paddingTop = '100vh';
