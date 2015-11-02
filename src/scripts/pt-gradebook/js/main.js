$j(document).ready(function () {
    'use strict';
    if (window.location.pathname.indexOf('lunchtransactions.html') === -1) {
      var newLaunch = $j('#ptgNewLaunchBtn');
      var oldLaunch = $j('#icon-btn-gblaunch');
      var newLaunchBox = $j('#ptgNewLaunchBox');

      // Set new Launch button to old Launch link's href.
      newLaunch.attr('href', oldLaunch.attr('href'));

      // Remove "Run Installer Once, then" text
      newLaunchBox.find('p').eq(0).remove();

      // Remove hr separator
      newLaunchBox.find('hr').remove();

      // Remove last p tag that contains "Or use the old Launch" text
      // Because one p tag was removed, the p tag that we're removing here becomes the second (index: 1)
      // p tag.
      newLaunchBox.find('p').eq(1).remove();

      // Remove Gradebook page
      $j('[href^="/teachers/gradebook/home.html"]').parent().remove();

      // Rename Gradebook Launch header
      $j('#ptgNewLaunchBox').find('h2').text('GradeBook Launch');
    }
});
