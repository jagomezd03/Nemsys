function Translate() {
	//initialization
	this.init = function (attribute, lng) {
		this.attribute = attribute;
		this.lng = lng;
	}
	//translate 
	this.process = function () {
		_self = this;
		var xrhFile = new XMLHttpRequest();
		//load content data 
		xrhFile.open("GET", "js/lng/" + this.lng + ".json", false);
		xrhFile.onreadystatechange = function () {
			if (xrhFile.readyState === 4) {
				if (xrhFile.status === 200 || xrhFile.status == 0) {
					var LngObject = JSON.parse(xrhFile.responseText);
					var allDom = document.getElementsByTagName("*");
					for (var i = 0; i < allDom.length; i++) {
						var elem = allDom[i];
						var key = elem.getAttribute(_self.attribute);
						if (key != null) {
							elem.innerHTML = LngObject[key];
						}
					}

				}
			}
		}
		xrhFile.send();
	}
}

function translate(lng, tagAttr) {
	var translate = new Translate();
	translate.init(tagAttr, lng);
	translate.process();
	if (lng == 'en') {
		$("#enTranslator").css('background', 'var(--primary-color)');
		$("#enTranslator").css('color', 'var(--primary-color-light)');
		$("#esTranslator").css('background', 'var(--sidebar-color)');
		$("#esTranslator").css('color', 'var(--text-color)');
	}
	if (lng == 'es') {
		$("#esTranslator").css('background', 'var(--primary-color)');
		$("#esTranslator").css('color', 'var(--primary-color-light)');
		$("#enTranslator").css('background', 'var(--sidebar-color)');
		$("#enTranslator").css('color', 'var(--text-color)');
	}
}
$(document).ready(function () {
	//This is id of HTML element (English) with attribute lng-tag
	$("#enTranslator").click(function () {
		translate('en', 'lng-tag');
	});
	//This is id of HTML element (Español) with attribute lng-tag
	$("#esTranslator").click(function () {
		translate('es', 'lng-tag');
	});
});