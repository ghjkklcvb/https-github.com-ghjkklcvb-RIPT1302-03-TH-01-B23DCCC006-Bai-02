document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "admin" && password === "admin") {
      window.location.href = "quan_ly_sv.html"; // Redirect to admin dashboard
  } else {
      document.getElementById("error").innerText = "Tài khoản hoặc mật khẩu không chính xác";
  }
});
