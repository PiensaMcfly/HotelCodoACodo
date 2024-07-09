const url_api = 'http://localhost:8080';

const HeaderComponent = {
  template: `
<header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">
                <img src="Public/Logo.ico" alt="logoHotel" class="logo">
                Hotel Codo a Codo
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto d-flex align-items-center">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link btn btn-primary btn-sm" @click="$router.push('/miReserva')">Mi Reserva</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#habitaciones">Habitaciones</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#servicios">Servicios</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#ubicacion">Ubicacion</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contacto">Contacto</a>
                    </li>
                </ul>
            </div>
        </nav>
</header>
  `
};

const FooterComponent = {
  template: `
<footer class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">
    <img src="Public/Logo.ico" alt="logoHotel" class="logo">
    Hotel Codo a Codo
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavFooter"
    aria-controls="navbarNavFooter" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavFooter">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="/index.html">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#habitaciones">Habitaciones</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#servicios">Servicios</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#contacto">FAQs</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#ubicacion">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click="$router.push('/login')">Ingresar</a>
      </li>
    </ul>
  </div>
</footer>
  `,
};

const MainComponent = {
  template: `
    <main>
    <section class="Carrusel">

      <div class="swiffy-slider slider-item-reveal slider-nav-round slider-item-ratio slider-item-ratio-21x9"
        id="slider1">
        <ul class="slider-container">
          <li><img src="Public/habitacion1.jpg" loading="lazy" alt="..."></li>
          <li><img src="Public/habitacion5.jpg" loading="lazy" alt="..."></li>
          <li><img src="Public/habitacion3.jpg" loading="lazy" alt="..."></li>
          <li><img src="Public/habitacion4.jpg" loading="lazy" alt="..."></li>
        </ul>

        <button type="button" class="slider-nav" aria-label="Go left"></button>
        <button type="button" class="slider-nav slider-nav-next" aria-label="Go left"></button>

        <div class="slider-indicators slider-indicators-square d-none d-md-flex">
          <button class="active" aria-label="Go to slide"></button>
          <button aria-label="Go to slide"></button>
          <button aria-label="Go to slide"></button>
          <button aria-label="Go to slide"></button>
        </div>

        <div
          class="slider-indicators slider-indicators-sm slider-indicators-dark slider-indicators-round d-md-none slider-indicators-highlight">
          <button class="active" aria-label="Go to slide"></button>
          <button aria-label="Go to slide"></button>
          <button aria-label="Go to slide"></button>
          <button aria-label="Go to slide"></button>
        </div>
      </div>

    </section>

    <!-- Reserva -->
    <section id="reserva1" class="reserva">
      <section id="cta" class="cta">
        <div class="container" data-aos="zoom-in">

          <div class="text-center">
            <h3>Reserva Ahora</h3>
            <p> loquito si la queres pasar bien alquilate una habitazao por aca !</p>
            <a class="cta-btn" href="/formulario.html">RESERVAR</a>
          </div>

        </div>
      </section>
      <!-- End CALL TO ACTION -->

    </section>

    <!-- Habitaciones Cards -->
<section id="habitaciones" class="habitaciones">
    <h2>Nuestras Habitaciones</h2>
    <div class="row mt-5">
        <div class="col-md-4" v-for="habitacion in habitaciones" :key="habitacion.id">
            <div class="card mb-4 box-shadow">
                <img class="card-img-top img-thumbnail" :src="url_api + habitacion.foto" alt="Imagen de la habitación">
                <div class="card-body">
                    <h5 class="card-title">{{ habitacion.nombre }}</h5>
                    <p class="card-text"><u>Tipo habitación:</u> {{ habitacion.habitacionTipo }}</p>
                    <p class="card-text"><u>Precio:</u> {{ '$' }}{{ habitacion.precio }} por noche.</p>
                    <p class="card-text">{{ habitacion.descripcion }}</p>
                    
                    <div class="mt-6 btn-group">
                        <button type="button" @click="reservarHab(habitacion.id)" class="btn btn-sm btn-outline-secondary">Reservar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


    <!-- Servicios -->
    <section id="servicios" class="servicios">
      <div class="container">
        <h2 class="section-title">Servicios Incluidos</h2>
        <div class="services-grid">
          <div class="feature">
            <div class="feature-icon">
              <i class="fas fa-wifi"></i>
            </div>
            <h3 class="feature-title">Wifi 5G</h3>
            <p>Contamos con la mejor Calidad y cobertura 5g de internet con una descarga de 300MB para que puedas
              disfrutar sin ningun problema.</p>
            <a href="#" class="icon-link">
              Ver más
            </a>
          </div>
          <div class="feature">
            <div class="feature-icon">
              <i class="fas fa-dumbbell"></i>
            </div>
            <h3 class="feature-title">Gimnasio</h3>
            <p>Contamos con las maquinas de mas calidad del mercado junto a profesores de todo cuyo para que entrenes
              con lo mejor.</p>
            <a href="#" class="icon-link">
              Ver más
            </a>
          </div>
          <div class="feature">
            <div class="feature-icon">
              <i class="fas fa-swimmer"></i>
            </div>
            <h3 class="feature-title">Pileta Olimpica</h3>
            <p>Tenemos dos piscinas de excelente calidad,una de competencia y otra para que disfrutes junto a tu
              familia.</p>
            <a href="#" class="icon-link">
              Ver más
            </a>
          </div>

          <div class="feature">
            <div class="feature-icon">
              <i class="fas fa-swimmer"></i>
            </div>
            <h3 class="feature-title">Servicio New</h3>
            <p>Tenemos dos piscinas de excelente calidad,una de competencia y otra para que disfrutes junto a tu
              familia.</p>
            <a href="#" class="icon-link">
              Ver más
            </a>
          </div>
        </div>
      </div>
    </section>


    <!-- About Us-->
    <section id="quienes-somos">
      <h1>Quiénes Somos</h1>
      <p>
        Bienvenido a Hotel Codo a Codo, un oasis de lujo y confort en el corazón de la ciudad. Nuestro hotel de cinco
        estrellas ofrece una experiencia inigualable con elegantes habitaciones, servicios excepcionales y una
        dedicación absoluta a la satisfacción de nuestros huéspedes. Ya sea que nos visite por negocios o placer,
        nuestro equipo se asegura de que su estancia sea memorable y placentera.
      </p>
      <a class="btn" href="/formulario.html">Enviar Formulario</a>
    </section>
    

    <!-- Video -->
    <section class="video">
      <h1> Veni a Mendoza a Visitarnos</h1>
      <div class="videoDestino">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/RWSSUl80cYw?si=C_cR-mcNLXjrtk80"
          title="YouTube video player" frameborder="4"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      </div>
    </section>

    <!-- Contacto -->
    <section id="contacto" class="contacto">
      <!-- Puede ser un boton que te mande al html con el formulario  -->
      <div class="contactoDatos">
        <h1>CONTACTO</h1>
        <p>Para reservas, contáctenos</p>
        <p>Teléfono: 123-456-789</p>
        <p>Correo electrónico: info@hotelCodoacodo.com</p>

        <div class="socialMedia">
          <div class="socialMedia1">
            <a class="social-link1">
              <svg viewBox="0 0 16 16" class="bi bi-instagram" fill="currentColor" height="16" width="16"
                xmlns="http://www.w3.org/2000/svg" style="color: white">
                <path fill="white"
                  d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z">
                </path>
              </svg>
            </a>
            <a class="social-link2">
              <svg viewBox="0 0 16 16" class="bi bi-twitter" fill="currentColor" height="16" width="16"
                xmlns="http://www.w3.org/2000/svg" style="color: white">
                <path fill="white"
                  d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z">
                </path>
              </svg> </a>
            <a class="social-link3">
              <svg viewBox="0 0 16 16" class="bi bi-discord" fill="currentColor" height="16" width="16"
                xmlns="http://www.w3.org/2000/svg" style="color: white">
                <path fill="white"
                  d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z">
                </path>
              </svg>
            </a>
            <a class="social-link4">
              <svg viewBox="0 0 16 16" class="bi bi-whatsapp" fill="currentColor" height="16" width="16"
                xmlns="http://www.w3.org/2000/svg" style="color: white">
                <path fill="white"
                  d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z">
                </path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <br>

      <!-- Aca va el MAPS DE GOOGLE  -->
      <h2>Veni a Conocernos en Persona</h2>
      <iframe id="ubicacion"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107217.98176547179!2d-68.94092033130947!3d-32.883308183863384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e093ec45179bf%3A0x205a78f6d20efa3a!2sMendoza%2C%20Capital%2C%20Mendoza!5e0!3m2!1ses!2sar!4v1716745401897!5m2!1ses!2sar"
        width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
  </main>
  `,
  data() {
    return {
      habitaciones: [],
      url_api
    };
  },
  mounted() {
    this.fetchHabitaciones();
  },
  methods: {
    reservarHab(id) {
      this.$router.push({ name: 'reservar', params: { id: id } });
    },
    fetchHabitaciones() {
      console.log(url_api)
      axios.get(url_api + '/habitaciones')
        .then(response => {
          this.habitaciones = response.data;
        })
        .catch(error => {
          console.error('Error al obtener las habitaciones:', error);
        });
    }
  }
};

const ReservarComponent = {
  template: `
<main class="container">
  <div v-if="!reservaResumen">
  <div class="mt-4">
    <h3>Estás a un paso de reservar!</h3>
  </div>
  <div class="row justify-content-center mt-5">
    <div class="col-md-4" v-for="habitacion in habitaciones" :key="habitacion.id">
            <div class="card mb-4 box-shadow">
                <img class="card-img-top" :src="url_api + habitacion.foto">
                <div class="card-body">
                    <h5 class="card-title">{{ habitacion.nombre }}</h5>
                    <p class="card-text"><u>Tipo habitación:</u> {{ habitacion.habitacionTipo }}</p>
                    <p class="card-text"><u>Precio:</u> {{ '$' }}{{ habitacion.precio }} por noche.</p>
                    <p class="card-text">{{ habitacion.descripcion }}</p>
                </div>
            </div>
        </div>
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">
          Reserva de Habitación
        </div>
        <div class="card-body">
          <form @submit.prevent="reservar">
              <div class="form-group">
                <label for="nombre">Nombre</label>
                <input v-model="formData.nombre" type="text" class="form-control" id="nombre" placeholder="Ingrese su nombre">
              </div>
              <div class="form-group">
                <label for="apellido">Apellido</label>
                <input v-model="formData.apellido" type="text" class="form-control" id="apellido" placeholder="Ingrese su apellido">
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input v-model="formData.email" type="email" class="form-control" id="email" placeholder="Ingrese su correo electrónico">
              </div>
              <div class="form-group">
                <label for="fechaLlegada">Fecha de Llegada</label>
                <input v-model="formData.fechaLlegada" type="date" class="form-control" id="fechaLlegada">
              </div>
              <div class="form-group">
                <label for="fechaSalida">Fecha de Salida</label>
                <input v-model="formData.fechaSalida" type="date" class="form-control" id="fechaSalida">
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-primary mt-4">Reservar Habitación!</button>
              </div>
            </form>
        </div>
      </div>
    </div>
  </div>
  </div>
  <div v-else>
    <div class="mt-4 justify-content-center">
    <h3>Tu reserva esta lista!</h3>
    <div class="d-flex justify-content-center align-items-center mt-4" style="height: 200px;">
    <i class="bi bi-check-circle text-success" style="font-size: 10rem;"></i>
    </div>
        <div class="card mt-4">
          <div class="card-header">
            Detalles de tu reserva
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-6">
                <p><strong>Código de Reserva:</strong> {{ reservaResumen.codigoReserva }}</p>
                <p><strong>Fecha de Reserva:</strong> {{ formatearFecha(reservaResumen.fechaReserva) }}</p>
                <p><strong>Fecha de Check-in:</strong> {{ formatearFecha(reservaResumen.fechaLlegada) }}</p>
                <p><strong>Fecha de Check-out:</strong> {{ formatearFecha(reservaResumen.fechaSalida) }}</p>
                <p><strong>Estado: </strong> 
                  <span :class="{'text-success': reservaResumen.estadoReserva, 'text-danger': !reservaResumen.estadoReserva}">
                    <strong>{{ reservaResumen.estadoReserva ? 'Reservado' : 'Cancelado' }}</strong>
                  </span>
                </p>
              </div>
              <div class="col-md-6">
                <p><strong>Nombre:</strong> {{ reservaResumen.NombreUsuario }}</p>
                <p><strong>Apellido:</strong> {{ reservaResumen.apellido }}</p>
                <p><strong>Habitación:</strong> {{ reservaResumen.tipoHab }}</p>
                <p><strong>Precio por Noche:</strong> {{'$'}}{{ reservaResumen.precio }}</p>
                <p><strong>Descripción de Habitación:</strong> {{ reservaResumen.descripcion }}</p>
                <p><strong>Email de Usuario:</strong> {{ reservaResumen.email }}</p>
              </div>
            </div>
          </div>
      </div>

</div>
    
    </div>
  </div>
</main>
  `,
  computed: {
    formatearFecha() {
      return (fecha) => {
        if (typeof fecha === 'string') {
          fecha = new Date(fecha);
        }
        if (fecha instanceof Date && !isNaN(fecha)) {
          return fecha.toISOString().slice(0, 10);
        } else {
          return 'Fecha inválida';
        }
      };
    }
  },
  created() {
    this.reservaId = this.$route.params.id;

    axios.get(url_api + '/verHab/' + this.reservaId)
      .then(response => {
        this.habitaciones = response.data;
      })
      .catch(error => {
        console.error('Error al obtener las habitaciones:', error);
      });
  },
  data() {
    return {
      url_api,
      habitaciones: null,
      formData: {
        nombre: '',
        apellido: '',
        email: '',
        fechaLlegada: '',
        fechaSalida: '',
        id: null
      },
      reservaResumen: null
    };
  },
  methods: {
    reservar() {
      this.formData.id = this.reservaId;
      axios.post(url_api + '/reservar', this.formData)
        .then(response => {
          this.reservaResumen = response.data[0];
          // Realizar acciones adicionales después de reservar
        })
        .catch(error => {
          console.error('Error al reservar habitación:', error);
        });
    }
  }
};


const MiReservaComponent = {
  template: `
<main class="container">
    <div v-if="mostrarFormulario && !mostrarError">
      <h1 class="text-center mt-4">Buscar Reserva</h1>
      <form @submit.prevent="buscarReserva" class="text-center mt-4">
        <div class="form-group">
            <input v-model="codigoReserva" type="text" class="form-control w-50 mx-auto" id="buscarReserva" placeholder="Ingrese código de reserva">
        </div>
        <button type="submit" class="btn btn-primary">Buscar mi reserva!</button>
      </form>
    </div>
    <div v-if="mostrarError" class="mt-5">
      <h3>No se encontraron reservas</h3>
    </div>
    <div v-if="reservaResumen">
      <div class="mt-4">
        <h3>Tus reservas</h3>
      </div>
      <div class="container mt-2">
        <div class="card">
          <div class="card-header">
            Detalle de mi reserva
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-6">
                <p><strong>Código de Reserva:</strong> {{ reservaResumen.codigoReserva }}</p>
                <p><strong>Fecha de Reserva:</strong> {{ formatearFecha(reservaResumen.fechaReserva) }}</p>
                <p><strong>Fecha de Check-in:</strong> {{ formatearFecha(reservaResumen.fechaLlegada) }}</p>
                <p><strong>Fecha de Check-out:</strong> {{ formatearFecha(reservaResumen.fechaSalida) }}</p>
                <p><strong>Estado: </strong> 
                  <span :class="{'text-success': reservaResumen.estadoReserva, 'text-danger': !reservaResumen.estadoReserva}">
                    <strong>{{ reservaResumen.estadoReserva ? 'Reservado' : 'Cancelado' }}</strong>
                  </span>
                </p>
              </div>
              <div class="col-md-6">
                <p><strong>Nombre:</strong> {{ reservaResumen.NombreUsuario }}</p>
                <p><strong>Apellido:</strong> {{ reservaResumen.apellido }}</p>
                <p><strong>Habitación:</strong> {{ reservaResumen.tipoHab }}</p>
                <p><strong>Precio por Noche:</strong> {{'$'}}{{ reservaResumen.precio }}</p>
                <p><strong>Descripción de Habitación:</strong> {{ reservaResumen.descripcion }}</p>
                <p><strong>Email de Usuario:</strong> {{ reservaResumen.email }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-4">
          <button class="btn btn-danger" @click="cancelarReserva">Cancelar Reserva</button>
        </div>
      </div>
    </div>
</main>
  `,
  data() {
    return {
      mostrarFormulario: true,
      mostrarDetalle: false,
      mostrarError: false,
      codigoReserva: '',
      reservaResumen: null
    };
  },
  computed: {
    formatearFecha() {
      return (fecha) => {
        if (typeof fecha === 'string') {
          fecha = new Date(fecha);
        }
        if (fecha instanceof Date && !isNaN(fecha)) {
          return fecha.toISOString().slice(0, 10);
        } else {
          return 'Fecha inválida';
        }
      };
    }
  },
  methods: {
    buscarReserva() {
      axios.get(url_api + '/miReserva/' + this.codigoReserva)
        .then(response => {
          this.reservaResumen = response.data[0];
          this.mostrarDetalle = true;
          this.mostrarFormulario = false;
        })
        .catch(error => {
          this.mostrarError = true;
          this.mostrarFormulario = false;
        });

    },
    cancelarReserva() {
      axios.get(url_api + '/cancelarReserva/' + this.codigoReserva)
        .then(response => {
          this.reservaResumen = response.data[0];
        })
        .catch(error => {
          console.error('Error al obtener las habitaciones:', error);
        });

    },
  },
};



const AdminComponent = {
  template: `
      <div class="position-fixed start-50 translate-middle-x" style="top: 25vh; z-index: 1050; transform: translate(-50%, -50%);">

        <div class="toast" id="successToast" role="alert" aria-live="assertive" aria-atomic="true" data-delay="5000">
          <div class="toast-header bg-success text-white">
            <strong class="mr-auto">Éxito</strong>
            <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="toast-body">
            Operación completada exitosamente.
          </div>
        </div>

        <div class="toast" id="errorToast" role="alert" aria-live="assertive" aria-atomic="true" data-delay="5000">
          <div class="toast-header bg-danger text-white">
            <strong class="mr-auto">Error</strong>
            <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="toast-body">
            Ha ocurrido un error. Inténtalo de nuevo más tarde.
          </div>
        </div>
  </div>

<div class="container mt-2 mb-3">
  <div class="row justify-content-center">
    <div class="col-6" v-if="!auth">
      <div class="card">
        <div class="card-header bg-primary text-white">
          Iniciar Sesión
        </div>
        <div class="card-body">
          <form @submit.prevent="login">
            <div class="form-group">
              <label for="username">Usuario</label>
              <input type="text" class="form-control" v-model="formData.usuario" id="username" name="username" placeholder="Ingrese su usuario">
            </div>
            <div class="form-group">
              <label for="password">Contraseña</label>
              <input type="password" class="form-control" v-model="formData.pass" id="password" name="password" placeholder="Ingrese su contraseña">
            </div>
            <div v-if="showError" class="alert alert-danger" role="alert">
              Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.
            </div>
            <button type="submit" class="btn btn-primary btn-block mt-4">Ingresar</button>
          </form>
        </div>
      </div>
    </div>
      <div v-else>
      <div class="row justify-content-center">
    <div class="col">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h3 class="mb-0">Bienvenido admin!</h3>
          <a href="#" class="lead display-5" @click="logout">Salir</a>
        </div>




  
  <!-- Botón Agregar habitación a la derecha -->
  <div class="d-flex justify-content-end mb-5 mt-4">
    <button type="button" @click="abrirModalCrearEditar('crear', null)" class="btn btn-sm btn-outline-primary">Agregar habitación</button>
  </div>

        <div class="row mt-4">
          <div class="col-md-4" v-for="(habitacion, index) in habitaciones" :key="habitacion.id">
            <div class="card mb-4 box-shadow">
              <img class="card-img-top img-thumbnail" :src="url_api + habitacion.foto" alt="Imagen de la habitación">
              <div class="card-body">
                <h5 class="card-title">{{ habitacion.nombre }}</h5>
                <p class="card-text"><u>Tipo habitación:</u> {{ habitacion.habitacionTipo }}</p>
                <p class="card-text"><u>Precio:</u> {{ '$' }}{{ habitacion.precio }} por noche.</p>
                <p class="card-text">{{ habitacion.descripcion }}</p>
                
                <div class="btn-group d-flex mt-5">
                  <button type="button" @click="abrirModalCrearEditar('editar', habitacion)" class="btn btn-sm btn-outline-primary">Editar habitación</button>
                  <button type="button" @click="eliminarHabitaciones(habitacion.id)" class="btn btn-sm btn-outline-danger ml-2">Eliminar habitación</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="modalCrearEditar" tabindex="-1" role="dialog" aria-labelledby="modalCrearEditarTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modalCrearEditarTitle">{{ modoModal === 'crear' ? 'Crear Habitación' : 'Editar Habitación' }}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <form @submit.prevent="procesar">
        <div class="modal-body">
          <div class="form-group">
            <label for="nombre">Nombre</label>
            <input v-model="formData.nombre" type="text" class="form-control" id="nombre" placeholder="Ingrese un nombre para la habitación">
          </div>
          <div class="form-group">
            <label for="Precio">Precio ($)</label>
            <input v-model="formData.precio" type="number" class="form-control" id="Precio">
          </div>
          <div class="form-group">
            <label for="tipoHabitacion">Tipo de Habitación</label>
            <select v-model="formData.tipoHabitacion" class="form-control" id="tipoHabitacion">
              <option value="" disabled>Seleccione el tipo ...</option>
              <option value="1">Habitación Simple</option>
              <option value="2">Habitación Doble</option>
              <option value="3">Habitación Suite</option>
            </select>
          </div>
          <div class="form-group">
            <div v-if="formData.fotoPreview">
              <label for="fotoShow">Vista previa:</label>
              <img :src="formData.fotoPreview" id="fotoShow" width="50px">
            </div>
          </div>
          <div class="form-group">
            <label for="foto">Seleccionar imágen:</label>
            <input type="file" class="form-control-file" id="foto" accept="image/*" @change="handleFileChange">
          </div>
          <div class="form-group">
            <label for="descripcion">Descripción</label>
            <textarea v-model="formData.descripcion" class="form-control" id="descripcion"></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
          <button type="submit" class="btn btn-primary">{{ modoModal === 'crear' ? 'Crear' : 'Guardar cambios' }}</button>
        </div>
      </form>
    </div>
  </div>
</div>

      </div>
    </div>
  </div>
</div>
  `,
  data() {
    return {
      formData: {},
      auth: false,
      habitaciones: [],
      modoModal: '',
      habitacionSeleccionada: null,
      showError: false,
      url_api
    };
  },

  methods: {
    logout() {
      localStorage.removeItem('token');
      window.location.reload();
    },
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.formData.foto = file;
        this.formData.fotoPreview = URL.createObjectURL(file);
      } else {
        this.formData.fotoPreview = null;
      }
    },
    procesar() {
      
      if (this.modoModal === 'crear') {
        this.crearHabitaciones();
      } else {
        this.editarHabitaciones()
      }
    },
    abrirModalCrearEditar(modo, habitacion) {
      this.modoModal = modo;
      if (modo === 'editar' && habitacion) {
        this.formData = {
          id: habitacion.id,
          nombre: habitacion.nombre,
          precio: habitacion.precio,
          foto: null,
          tipoHabitacion: habitacion.tipoHab_id,
          descripcion: habitacion.descripcion
        };
      } else {
        this.formData = {
          id: '',
          nombre: '',
          precio: '',
          tipoHabitacion: '',
          descripcion: '',
          foto: null
        };
      }
      $('#modalCrearEditar').modal('show');
    },
    async login() {
      try {
        const response = await axios.post(url_api + '/login', this.formData);
        if (response.data && response.data.token) {
          const token = response.data.token;
          localStorage.setItem('token', token);
          window.location.reload();
        }
      } catch (error) {
        this.showError = true;
      }
    },
    getHabitaciones() {

      axios.get(url_api + '/verHabitaciones', {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      }
      )
        .then(response => {
          this.auth = true;
          this.habitaciones = response.data
        })
        .catch(error => {
          localStorage.removeItem('token');
          window.location.reload();
        });

    },
    editarHabitaciones() {

      let data = new FormData();
      for (let key in this.formData) {
        data.append(key, this.formData[key]);
      }

      axios.put(url_api + '/editarHabitacion', this.formData, {
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
          'Content-Type': 'multipart/form-data'
        }
      }
      )
        .then(response => {
          this.habitaciones = response.data
          $('#modalCrearEditar').modal('hide');
          $('#successToast').toast('show');
        })
        .catch(error => {
          $('#errorToast').toast('show');
        });

    },
    eliminarHabitaciones(id) {

      axios.delete(url_api + '/eliminarHabitacion/' + id, {
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
        }
      }
      )
        .then(response => {
          this.habitaciones = response.data
          $('#successToast').toast('show');
        })
        .catch(error => {
          $('#errorToast').toast('show');
        });
    },

    crearHabitaciones() {

      let data = new FormData();
      for (let key in this.formData) {
        data.append(key, this.formData[key]);
      }

      axios.post(url_api + '/nuevaHabitacion', this.formData, {
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(response => {
          this.habitaciones = response.data;
          $('#modalCrearEditar').modal('hide');
          $('#successToast').toast('show');
        })
        .catch(error => {
          $('#errorToast').toast('show');
        });
    }
  },
  mounted() {
    if (localStorage.getItem('token')) {
      this.getHabitaciones();
    }
  }
};

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    {
      path: '/', component: MainComponent, beforeEnter(to, from, next) {
        next();
      }
    },
    {
      path: '/miReserva', component: MiReservaComponent, beforeEnter(to, from, next) {
        next();
      }
    },
    {
      path: '/reservar/:id', name: 'reservar', component: ReservarComponent, beforeEnter(to, from, next) {
        next();
      }
    },
    {
      path: '/login', component: AdminComponent, beforeEnter(to, from, next) {
        next();
      }
    },
  ]
});

const app = Vue.createApp();

app.component('header-component', HeaderComponent);
app.component('footer-component', FooterComponent);

app.use(router);
const vm = app.mount('#app');