<template>
  <div class="main-top" id="home">
  <!-- header -->
    <div class="headder-top d-lg-flex justify-content-between align-items-center py-3 px-sm-3">
      <!-- logo -->
      <div id="logo">
        <h1>
          <a href="index.html">xx公司</a>
        </h1>
      </div>
      <!-- //logo -->
      <!-- nav -->
      <nav>
        <label for="drop" class="toggle">Menu</label>
        <input type="checkbox" id="drop" />
        <ul class="menu">
          <li>
            <a href="index.html" class="active">Home</a>
          </li>
          <li>
            <a href="about.html">About</a>
          </li>
          <li>
            <a href="service.html">Services</a>
          </li>
          <li>
            <!-- First Tier Drop Down -->
            <label for="drop-2" class="toggle toogle-2">Dropdown
              <span class="fa fa-angle-down" aria-hidden="true"></span>
            </label>
            <a href="#">Dropdown
              <span class="fa fa-angle-down" aria-hidden="true"></span>
            </a>
            <input type="checkbox" id="drop-2" />
            <ul>
              <li>
                <a href="gallery.html" class="drop-text">Projects</a>
              </li>
              <li>
                <a href="error_page.html" class="drop-text">404</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>
        </ul>
      </nav>
      <!-- //nav -->
    </div>
  </div>
</template>

<script>
export default {
    name:'nav'

}
</script>

<style scoped>
    @import "../../assets/css/bootstrap.min.css";
    @import "../../assets/css/style.css";

</style>
