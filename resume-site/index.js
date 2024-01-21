<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function () {
  // POST method to increment the visitor count
  fetch('https://wuf2p7i4qijhd3rm37qgs2lpnm0jtqrv.lambda-url.us-east-1.on.aws/', {
    method: 'POST'
  })
    .then(response => response.json())
    .then(data => {
      // Assuming the response contains the count directly
      document.getElementById("visits").innerText = data;
      document.getElementById("counter-burger").innerText = data;
    })
    .catch(error => console.error('Error:', error))
});

</script>