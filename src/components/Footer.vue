<template>
   <div class="footer">
      <div class="footer__link-container">
         <div class="footer__link-button">
            <a class="footer__link" href="https://www.linkedin.com/in/martin-zupfer-skj%C3%A6rstad-6257681a3" target="_blank">LinkedIn</a>
         </div>

         <div class="footer__link-button">
            <a class="footer__link" href="https://www.instagram.com/martin.z.s/" target="_blank">Instagram</a>
         </div>

         <div class="footer__link-button">
            <a class="footer__link" href="https://github.com/MZSkjaerstad" target="_blank">Github</a>
         </div>
      </div>
   </div>
</template>

<script></script>

<style>
   .footer {
      width: 100%;
      height: 5rem;
      border-top: solid var(--foreground) 1px;
      display: flex;
      justify-content: center;
      align-items: center;
   }

   .footer__link-container {
      width: 25rem;
      display: flex;
      justify-content: space-between;
      transform: translateX(2.3%);
   }

   .footer__link-button{
      width: 8rem;
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
   }

   .footer__link {
      color: var(--color);
      font-size: 0.9rem;
      font-style: italic;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.05rem;
   }

   .footer__link-button:hover .footer__link {
      color: var(--foreground);
      font-size: 1rem;
      font-weight: 500;
      transition: ease-in-out 0.2s;
   }
</style>