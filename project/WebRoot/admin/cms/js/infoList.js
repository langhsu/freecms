function add(){
	location.href="info_edit.do?pageFuncId=08cfd343-2803-403e-b952-f7d41199d8e1&channel.id="+$("#channelId").val();
}
function edit(){
	if(isCheckOne()){
		location.href="info_edit.do?pageFuncId=08cfd343-2803-403e-b952-f7d41199d8e1&info.id="+getCheckOneValue();
	}else{
		alert("请选择一条记录!");
	}
}

function del(){
	if(isCheck()){
		if(confirm("确定删除操作么?此操作无法回退!")){
			$.post("info_del.do","ids="+getCheckValue(),delComplete);
		}
	}else{
		alert("请选择要操作的记录!");
	}
}
function delComplete(data){
	if(data!=""){
		var datas=data.split(";");
		if(datas!=null && datas.length>0){
			for(var i=0;i<datas.length;i++){
				if(datas[i]!="" && document.getElementById("tr"+datas[i])!=null){
						document.getElementById("tr"+datas[i]).parentNode.removeChild(document.getElementById("tr"+datas[i]));
				}
			}
		}
	}
}