export default defineNuxtRouteMiddleware((to, from) => {
    
    // archive with global: auth.global.ts
    /* const isLoggedIn:boolean = false;

    if(isLoggedIn){
        //if logged in redirect to
        return navigateTo(to.fullPath);
    }

    return navigateTo('/'); */


    //middleware without .global accesed by definePageMeta
    console.log('Hello from middleware');
    
});