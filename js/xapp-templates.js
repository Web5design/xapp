XAPP.TEMPLATES = (function() { 

		var list_item = '<li data-id="${id}">${title}</li>';
		var list_item_image = '<li data-id="${id}"><aside><img src="${img}" /></aside>${title}</li>';
		
		
		
		return {
			list_item: $.template(list_item),
			list_item_image: $.template(list_item_image),
		}
		
})();