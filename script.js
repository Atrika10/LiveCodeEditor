function run(){
    const htmlCode = document.getElementById("html_code").value;
    const cssCode = document.getElementById("css_code").value;
    const jsCode = document.getElementById("js_code").value;
    const output = document.getElementById("output");

    output.contentDocument.body.innerHTML = htmlCode + "<style>"+ cssCode+"</style>";
    output.contentWindow.eval(jsCode);
}