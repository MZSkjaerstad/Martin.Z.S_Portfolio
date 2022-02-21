<template>
   <div class="exhibition">
      <div class="exhibition__transition">
         <div class="exhibition__title">Exhibition</div>
      </div>

      <div class="exhibition__content">
         <!-- Put content here! -->
      </div>
   </div>
</template>

<style>
   /* 1.1 Exhibition */

   .exhibition {
      background: black;
   }

   /* 1.2 Transition */

   .exhibition__transition {
      height: 20rem;
      background: linear-gradient(0deg, black 20%, var(--primary-color) 100%);
      display: flex;
      justify-content: center;
      align-items: center;
   }

   .exhibition__title {
      font-size: var(--font-size-subtitle);
      font-style: italic;
      font-weight: 600;
   }
   
   /* 1.3 Content */
   

</style>
