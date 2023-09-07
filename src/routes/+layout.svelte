<script>
  import "../app.css";
  import Popup from "../components/Popup.svelte";
</script>

<header class="bg-slate-300 p-3 flex justify-between items-baseline">
  <h1 class="text-xl font-medium">Escala Tipográfica</h1>
  <p class="text-slate-100"><a class="hover:text-slate-500 text-sm" href="https://werls.xyz">Werllen Castro, 2023</a></p>
</header>

<slot />

<!-- <Popup>
  <div>
    Este aplicativo ainda está em fase de testes. Encontrou algum bug? 
    Entre em contato pelo e-mail 
    <a class="underline" href="mailto:hi@werls.xyz">hi@werls.xyz</a>
    ou abra uma Issue no <a class="underline" href="https://github.com/werls/typescale">repositório do projeto no GitHub</a>.
  </div>
</Popup> -->

