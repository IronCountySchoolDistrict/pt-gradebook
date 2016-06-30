$j(document).ready(function () {
    'use strict';
    if (window.location.pathname.indexOf('lunchtransactions.html') === -1) {
      var newLaunchBox = $j('#ptgNewLaunchBox');

      // Removes Older Launch link
      newLaunchBox.find('p').eq(2).remove();
      // Rename Gradebook Launch header
      $j('#ptgNewLaunchBox').find('h2').text('Old Gradebook');
    }
});
