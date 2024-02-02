document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    var pdfUrl =
      "/Vinayagoud Meti-fw28_189-Full Stack Web Developer submitted.pdf";

    var link = document.createElement("a");

    link.setAttribute("download", "Vinayagoud Meti Resume.pdf");
    link.href = pdfUrl;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  });
