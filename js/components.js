(() => {
  'use strict';

  window.addEventListener('load', () => {
    document.getElementById('menu').innerHTML = getMenu();
    document.getElementById('menu-mobile').innerHTML = getMenuMobile();
    document.getElementById('footer').innerHTML = getFooter();
  });

  const getMenu = () => {
    console.log("cheers from getHeader");
    return(
      `
      <!-- Main Menu -->
      <div class="menu_main_wrap">
          <nav class="menu_main_nav_area">
              <ul id="menu_main" class="menu_main_nav">
                  <!-- Inicio -->
                  <li class="menu-item">
                      <a href="#inicio">Inicio</a>
                  </li>
                  <!-- /Inicio -->
                  <!-- Nosotros -->
                  <li class="menu-item">
                      <a href="#nosotros">Nosotros</a>
                  </li>
                  <!-- /Nosotros -->
                  <!-- Iniciativas -->
                  <li class="menu-item">
                      <a href="#iniciativas">Iniciativas</a>
                  </li>
                  <!-- /Iniciativas -->
                  <!-- Shapers -->
                  <li class="menu-item">
                      <a href="#shapers">Shapers</a>
                  </li>
                  <!-- /Shapers -->
                  <!-- Contacto -->
                  <li class="menu-item">
                      <a href="#contacto">Contacto</a>
                  </li>
                  <!-- /Contacto -->
              </ul>
          </nav>
      </div>
      <!-- /Main Menu -->
      `);
  }

  const getMenuMobile = () => {
    console.log("cheers from getMenuMobile");
    return(
      `
      <!-- Header Mobile -->
      <div class="header_mobile">
          <div class="content_wrap">
              <div class="menu_button icon-menu"></div>
              <div class="logo">
                  <a href="/">
                      <img src="images/logo.png" class="logo_main" alt="">
                  </a>
              </div>
          </div>
          <div class="side_wrap">
              <div class="close">Close</div>
              <div class="panel_top">
                  <nav class="menu_main_nav_area">
                      <ul id="menu_main_mobile" class="menu_main_nav">
                        <!-- Inicio -->
                        <li class="menu-item">
                            <a href="#inicio">Inicio</a>
                        </li>
                        <!-- /Inicio -->
                        <!-- Nosotros -->
                        <li class="menu-item">
                            <a href="#nosotros">Nosotros</a>
                        </li>
                        <!-- /Nosotros -->
                        <!-- Iniciativas -->
                        <li class="menu-item">
                            <a href="#iniciativas">Iniciativas</a>
                        </li>
                        <!-- /Iniciativas -->
                        <!-- Shapers -->
                        <li class="menu-item">
                            <a href="#shapers">Shapers</a>
                        </li>
                        <!-- /Shapers -->
                        <!-- Contacto -->
                        <li class="menu-item">
                            <a href="#contacto">Contacto</a>
                        </li>
                        <!-- /Contacto -->
                      </ul>
                  </nav>
              </div>
          </div>
          <div class="mask"></div>
      </div>
      <!-- /Header Mobile -->
      `
    );

  }

  const getFooter = () => {
    console.log("cheers from getFooter");
    return(
      `
      <!-- Donation section -->
      <div class="hp1_donation_section">
          <div class="content_wrap">
              <div class="sc_section column-7_10">
                  <div class="sc_section_inner">
                      <div class="sc_section aligncenter">
                          <div class="sc_section_inner">
                              <h1 class="donation_title_custom">
                                  Jóvenes excepcionales<br />
                                  contribuyendo al desarrollo <br>
                                  de sus comunidades</h1>
                              <h2 class="sc_title sc_title_cursive sc_align_center" style="color: white">Global Shapers Cancún</h2>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <!-- /Donation section -->
      <!-- Join Us section -->
      <div class="hp1_join_us_section accent1_bgc padding_top_2_75em padding_bottom_3em" id="contacto">
          <div class="content_wrap">
              <div class="columns_wrap sc_columns columns_nofluid sc_columns_count_4 column_resizer">
                  <div class="column-4_4 sc_column_item sc_column_item_1 odd first span_2">
                    <h2 class="hp1_join_us_info custom_heading_1">Si estás interesado en contactarnos favor de enviar un correo con tus datos y tu tema de interés directamente a >></h2>
                    <style>.hp1_join_us_info.custom_heading_1 a:hover {color:white !important}</style>
                    <h2 class="hp1_join_us_info custom_heading_1">| <a href="#">hola@globalshaperscancun.org</a></h2>
                  </div>
              </div>
          </div>
      </div>
      <!-- /Join Us section -->
      <!-- Copyright -->
      <div class="copyright_wrap copyright_style_text scheme_original">
          <div class="copyright_wrap_inner">
              <div class="content_wrap">
                  <div class="copyright_text">Global Shapers Cancún © <script>document.write(new Date().getFullYear())</script></div>
              </div>
          </div>
      </div>
      <!-- /Copyright -->
      `);
  }

})();
