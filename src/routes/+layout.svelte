<script>
  import "../app.css";
  import Header from "../components/Header.svelte";
  import Popup from "../components/Popup.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<Header />

<slot />

<Footer />



<!-- <Popup>
  <div>
    Este aplicativo ainda está em fase de testes. Encontrou algum bug? 
    Entre em contato pelo e-mail 
    <a class="underline" href="mailto:hi@werls.xyz">hi@werls.xyz</a>
    ou abra uma Issue no <a class="underline" href="https://github.com/werls/typescale">repositório do projeto no GitHub</a>.
  </div>
</Popup> -->

