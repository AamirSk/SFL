sa_params += ''; sa_params += ''; sa_params += ''; sa_params += ''; sa_params += ''; var sa_iframe = document.createElement("iframe");document.body.appendChild(sa_iframe); sa_iframe.setAttribute('style', 'width:1px;height:1px;display:none'); var sa_frmcode = '
'+sa_params+'
<'+'script language="javascript">document.pgfrm.submit()<'+'/script>'; 
sa_iframe.contentWindow.document.write(sa_frmcode); 
sa_contactsent();