
 function copyEmail() {
    const email = "yourname@example.com";
    navigator.clipboard.writeText(email).then(() => {
      showToast("📩 Email copied");
    });
  }

  function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.className = "toast show";
    setTimeout(() => {
      toast.className = "toast";
    }, 2500);
  }