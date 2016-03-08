'use strict';

var nua = navigator.userAgent;
if (nua.match(/IEMobile\/10\.0/)) {
		var msViewportStyle = document.createElement('style');
		msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
		document.querySelector('head').appendChild(msViewportStyle);
}

$(function () {
		var isAndroid = nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1;
		if (isAndroid) {
				$('select.form-control').removeClass('form-control').css('width', '100%');
		}
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFJLE1BQU0sVUFBVSxTQUFWO0FBQ1YsSUFBSSxJQUFJLEtBQUosQ0FBVSxpQkFBVixDQUFKLEVBQWtDO0FBQ2pDLE1BQUksa0JBQWtCLFNBQVMsYUFBVCxDQUF1QixPQUF2QixDQUFsQixDQUQ2QjtBQUVqQyxrQkFBZ0IsV0FBaEIsQ0FDRSxTQUFTLGNBQVQsQ0FDRSxxQ0FERixDQURGLEVBRmlDO0FBT2pDLFdBQVMsYUFBVCxDQUF1QixNQUF2QixFQUErQixXQUEvQixDQUEyQyxlQUEzQyxFQVBpQztDQUFsQzs7QUFVQSxFQUFFLFlBQVk7QUFDYixNQUFJLFlBQ0YsSUFBSSxPQUFKLENBQVksYUFBWixJQUE2QixDQUFDLENBQUQsSUFDMUIsSUFBSSxPQUFKLENBQVksVUFBWixJQUEwQixDQUFDLENBQUQsSUFDMUIsSUFBSSxPQUFKLENBQVksYUFBWixJQUE2QixDQUFDLENBQUQsSUFDN0IsSUFBSSxPQUFKLENBQVksUUFBWixNQUEwQixDQUFDLENBQUQsQ0FMbEI7QUFPYixNQUFJLFNBQUosRUFBZTtBQUNkLE1BQUUscUJBQUYsRUFBeUIsV0FBekIsQ0FBcUMsY0FBckMsRUFBcUQsR0FBckQsQ0FBeUQsT0FBekQsRUFBa0UsTUFBbEUsRUFEYztHQUFmO0NBUEMsQ0FBRiIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBudWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuaWYgKG51YS5tYXRjaCgvSUVNb2JpbGVcXC8xMFxcLjAvKSkge1xuXHRsZXQgbXNWaWV3cG9ydFN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblx0bXNWaWV3cG9ydFN0eWxlLmFwcGVuZENoaWxkKFxuXHRcdFx0ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXG5cdFx0XHRcdFx0J0AtbXMtdmlld3BvcnR7d2lkdGg6YXV0byFpbXBvcnRhbnR9J1xuXHRcdFx0KVxuXHQpO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJykuYXBwZW5kQ2hpbGQobXNWaWV3cG9ydFN0eWxlKVxufVxuXG4kKGZ1bmN0aW9uICgpIHtcblx0bGV0IGlzQW5kcm9pZCA9IChcblx0XHRcdG51YS5pbmRleE9mKCdNb3ppbGxhLzUuMCcpID4gLTFcblx0XHRcdCYmIG51YS5pbmRleE9mKCdBbmRyb2lkICcpID4gLTFcblx0XHRcdCYmIG51YS5pbmRleE9mKCdBcHBsZVdlYktpdCcpID4gLTFcblx0XHRcdCYmIG51YS5pbmRleE9mKCdDaHJvbWUnKSA9PT0gLTFcblx0KTtcblx0aWYgKGlzQW5kcm9pZCkge1xuXHRcdCQoJ3NlbGVjdC5mb3JtLWNvbnRyb2wnKS5yZW1vdmVDbGFzcygnZm9ybS1jb250cm9sJykuY3NzKCd3aWR0aCcsICcxMDAlJyk7XG5cdH1cbn0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
