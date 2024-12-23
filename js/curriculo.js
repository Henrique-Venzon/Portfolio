 document.getElementById("curriculoButton").addEventListener("click", function() {
    const fileUrl = 'assets/curriculo/Currículo-Henrique-Venzon.pdf';
    
    window.open(fileUrl, '_blank');
    
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'Curriculo_Henrique_Venzon.pdf'; 
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });