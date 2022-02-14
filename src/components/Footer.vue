<template>
   <div class="footer">
      <div class="footer__increment"></div>

      <div class="footer__content">
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
   </div>
</template>

<script></script>

<style>
   .footer__content {
      width: 100%;
      height: 5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
   }

   .footer__increment {
      width: 100%;
      border-top: var(--increment-style);
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
      color: var(--secondary-color);
      font-size: var(--font-size-body);
      font-style: italic;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.05rem;
   }

   .footer__link-button:hover .footer__link {
      color: var(--highlight-color);
      font-size: 1rem;
      font-weight: 500;
      transition: ease-in-out 0.2s;
   }

   @media screen and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
      .footer {
         padding: 0vw 5vw 0vw 5vw;
      }

      .footer__content {
         height: 10rem;
      }

      .footer__link-container {
         width: 40rem;
         margin-top: 0.5rem;
      }
   }
</style>