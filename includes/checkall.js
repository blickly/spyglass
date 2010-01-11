function checkAll(formId){
	var checkform=document.getElementById(formId);
	for (var i=0;i<checkform.elements.length;i++)
	{
		var e=checkform.elements[i];
		if ((e.name != 'master') && (e.type=='checkbox'))
		{
			e.checked=checkform.master.checked;
		}
	}
}
