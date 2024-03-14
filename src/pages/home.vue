<template>
  <v-system-bar>
    <div class="items">
      <div class="logo-wrapper">
        <img class="logo" src="@/assets/logo.svg">
        <h2><span class="highlight">POS</span>mart</h2>
      </div>

      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#aboutUs">About Us</a></li>
        <li><a href="#feature">Features</a></li>
        <li><a href="#service">Services</a></li>
        <li><a href="#contactUs">Contact Us</a></li>
      </ul>

      <div class="dashboard-btn">
        <v-btn text="Dashboard" to="/dashboard"></v-btn>
      </div>
    </div>
  </v-system-bar>

  <div v-html="htmlContent"></div>
</template>

<style scoped>
.v-system-bar {
  justify-content: space-between;
  align-items: center; 
  padding: 45px;
  background-color: white;
  color: black;
}

.items {
  display: grid;
  grid-template-areas:
    "logo-wrapper ul dashboard-btn"; 
  grid-template-columns: 1fr 2fr auto;
  align-items: center;
  width: 95%;
}

.logo-wrapper {
  display: flex;
  grid-area: logo-wrapper;
  align-items: center;
}

ul {
  display: flex;
  grid-area: ul;
  justify-items: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.dashboard-btn {
  grid-area: dashboard-btn;
}

h2 {
  font-size: 30px;
  margin-left: 10px;
  margin-bottom:15px
}

.logo {
  width: 54px;
  height: 42px;
}

ul li {
  margin-right: 10px;
  color: black;
  text-decoration: none;
}

.v-btn{
    background-color: #0077b6;
    padding: 8px 30px;
    border-radius: 5px;
    border: 2px solid #0077b6;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
}
</style>

<script>
export default {
  data() {
    return {
      htmlContent: `

    <!-- Main Content -->
    <main class="main">
        <!-- <div class="layer-blur1"></div>
        <div class="layer-blur2"></div> -->
        <section class="main-content">
            <h1 data-aos="fade-up" data-aos-delay="50" data-aos-duration="500">Grow Your Business with <br><span
                    class="highlight">POSmart</span></h1>
            <p data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000">Transform your business with POSmart.
                Say goodbye to manual record-keeping, transaction efficiency,
                accuracy, and make your customers happy! Grow your business today!</p>
        </section>

        <img src="src/POSmart-main/img/heroimg.png"
            alt="POS System Wireframe">
    </main>

    <!-- About us -->
    <section class="about-us" id="aboutUs">
        <div class="container">
            <div class="aboutus-content">
                <h4 data-aos="fade-right">ABOUT US
                    <div class="underline"></div>
                </h4>
                <h3 data-aos="fade-right">Ready to <span class="highlight">Grow</span> your Business? Learn More<br>
                    About <span class="highlight">POSmart</span> </h3>
                <p data-aos="fade-right">POSmart, or 'Point of Sale System Mart,' is a user-friendly web application
                    built for <i>People's
                        Mart</i>
                    vendors. It streamlines transaction processes, reduces errors, and saves time by automating
                    point-of-sale and inventory management, eliminating manual paper-based record-keeping.</p>
            </div>
        </div>
    </section>

    <section class="peoples-mart">
        <div class="container">
            <div class="peoples-mart-flex">
                <div class="peoples-mart-content">
                    <h4 data-aos="fade-right">WHAT IS <span class="highlight">PEOPLE'S MART?</span></h4>
                    <p data-aos="fade-right"><span class="p-highlight">People’s Mart</span> is a large public market
                        located in Liboton, Naga
                        City. It
                        plays a significant
                        role in the
                        city's economy and is a popular spot for locals to shop for a variety of goods.</p>
                    <p data-aos="fade-right">
                        <span class="p-highlight">POSmart</span> aims to help these small businesses, especially
                        vendors
                        that
                        do not have any
                        access to
                        technology like People’s Mart. And now, thanks to <i>POSmart</i>, these vendors can focus on
                        what
                        they
                        do
                        best—serving their customers—while letting <i>POSmart</i> handle the rest.
                    </p>
                </div>
                <img data-aos="zoom-in" loading="lazy" data-aos-delay="250" data-aos-duration="1000"
                    src="src/POSmart-main/img/peoplesmart2.png" alt="People's Mart">
            </div>
        </div>
    </section>

    <!-- Features -->
    <section class="features" id="feature">
        <div class="container">
            <div class="feature-flex">
                <div class="features-content">
                    <h4 data-aos="fade-right" data-aos-delay="250">FEATURES</h4>
                    <div class="feature-lists" data-aos="fade-right" data-aos-delay="800">
                        <div>Point Of Sale System</div>
                        <div>Inventory Management System</div>
                        <div>Real-Time Inventory Tracking</div>
                        <div>User-Friendly Interface</div>
                    </div>
                </div>
                <img data-aos="zoom-in" loading="lazy" data-aos-delay="250" data-aos-duration="1000"
                    src="src/POSmart-main/img/peoplesmart.png" alt="POS with girl smiling" loading="lazy">
            </div>
        </div>
    </section>

    <!-- Services -->
    <section class="services" id="service">
        <div class="container">
            <div class="services-content" data-aos="fade-up">
                <h4>SERVICES</h4>
                <p>In POSmart, we provide our customers with two services: the <i>Point Of Sale System</i> and the
                    <i>Inventory
                        Management System.</i>
                </p>
            </div>


            <div class="services-lists">
                <div class="container">
                    <div class="services-flex">
                        <div>
                            <h5 data-aos="fade-right">Point Of Sale System</h5>
                            <p data-aos="fade-right">Vendors at People's Mart no longer need to manually write down
                                order details on the
                                paper.
                                They
                                can input product information like name, description, quantity, price, category, etc.
                                into
                                our
                                system, which instantly generates a digital receipt for each order.</p>
                        </div>
                        <div>
                            <img data-aos="zoom-in" loading="lazy" data-aos-delay="250" data-aos-duration="1000"
                                src="src/POSmart-main/img/pos.png" alt="Point Of sale system">
                        </div>
                    </div>
                    <div class="services-flex1">
                        <div>
                            <h5 data-aos="fade-left" data-aos-delay="250">Inventory Management System</h5>
                            <p data-aos="fade-left" data-aos-delay="250"> Our system empowers People's Mart vendors to
                                effortlessly monitor their product
                                inventory in
                                real-time. They can add, modify, delete, and update product information to simplify
                                inventory management.</p>
                        </div>
                        <div>
                            <img data-aos="zoom-in" loading="lazy" data-aos-delay="250" data-aos-duration="1000"
                                src="src/POSmart-main/img/inventory.png" alt="Point Of sale system">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Us -->
    <section class="contact-us" id="contactUs">
        <div class="container">
            <div class="contactus-content">
                <h4 data-aos="fade-right" data-aos-delay="250">Contact Us
                    <div class="underline"></div>
                </h4>
                <h3 data-aos="fade-right" data-aos-delay="250">Got questions or need assistance?<br> <span
                        class="highlight">Reach out</span> to us</h3>

                <div class="contact-information" data-aos="fade-right" data-aos-delay="700">
                    <p><span class="label">Address:</span> Liboton, Naga City, Camarines Sur</p>
                    <p><span class="label">Email:</span> posmart145@gmail.com</p>
                    <p><span class="label">Phone Number:</span> +634040499872 </p>
                </div>

                <div class="location">

                    <iframe data-aos="zoom-in" data-aos-delay="250" data-aos-duration="1000"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.33700774215296!2d123.18990672491013!3d13.633894987888446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a1f34a220e7f6f%3A0x989837f477e76782!2sNAGA%20PEOPLE&#39;S%20MART!5e0!3m2!1sen!2sph!4v1705290126281!5m2!1sen!2sph"
                        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                        class="peoples"></iframe>

                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-flex">
                <div class="brand-name">
                    <img src="src/POSmart-main/img/POSmart.svg" loading="lazy" alt="POSmart Logo">
                    <h2>POSmart</h2>
                </div>

                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#aboutUs">About Us</a></li>
                    <li><a href="#service">Services</a></li>
                    <li><a href="#feature">Features</a></li>
                    <li><a href="#contactUs">Contact Us</a></li>
                </ul>

                <p>Copyright © 2023 POSmart. All rights reserved.</p>

            </div>
        </div>
    </footer>
`
    };
  },
  methods: {
    goToDashboard() {
      const router = useRouter();
      router.push('/dashboard'); // Replace '/dashboard' with the actual route path you want to navigate to
    }
  },
  mounted() {
    // Load AOS Animation library
    const aosScript = document.createElement('script');
    aosScript.src = 'https://unpkg.com/aos@next/dist/aos.js';
    aosScript.onload = () => {
      // Initialize AOS when the script is loaded
      AOS.init();
    };
    document.head.appendChild(aosScript);

    // Load your custom script.js file
    const customScript = document.createElement('script');
    customScript.src = 'src/POSmart-main/script.js';
    document.head.appendChild(customScript);
  }
};
</script>