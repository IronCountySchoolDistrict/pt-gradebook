import $ from 'jquery';

export default function() {
  $(() => {
      if (window.location.pathname.indexOf('lunchtransactions.html') === -1) {
        var newLaunchBox = $('#ptgNewLaunchBox');

        // Removes Older Launch link
        newLaunchBox.find('p').eq(2).remove();
        // Rename Gradebook Launch header
        $('#ptgNewLaunchBox').find('h2').text('Old Gradebook');
      }
  });
}
