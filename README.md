# REGLAS PARA DESARROLLAR CON TYPESCRIPT

## 1. Dar tipado a parametros de una funcion, si no sabes el tipo coloca como "any".

## 2. Evitar inicializar como "null" las variables.



# Estructura Semi-Clean Architecture

+---Apps  ->  
ª   +---Auth <b> Este es una App </b>
ª       ª   authSlice.ts <b>Este es un slice una parte del estado de Redux, donde se encuentran los reducers. </b>
ª       ª   
ª       +---fetchs <b> Carpeta de peticiones , solo peticiones u otros servicios como Localstorage. </b>
ª       ª       fetch-signin.ts
ª       ª       
ª       +---functions <b> Funciones donde se llaman a los Fetchs y hacer dispatchs, esta funcion no tiene que devolver nada. </b>
ª       ª       iniciar-session.tsx
ª       ª       
ª       +---hooks <b>  Carpeta de Hooks, aqui se llaman a las funciones , estos hooks se usan el useEffect, useState, useContext, useSelector ,etc.</b>
ª               useAuth.tsx
ª               
+---components <b> Estos son componentes, en los componentes de la aplicacion general, se peude guardar en sub carpetas.Aqui se llaman a los Hokks. </b>
ª       alert.tsx
ª       Auth.tsx
ª       Authentic.tsx
ª       Layout.tsx
ª       Navbar.tsx
ª       SidebarLayout.tsx
ª       
+---modern_redux <b> Configuracion de Redux como el Store y los Slices  </b>
ª       slices.ts
ª       store.ts
ª       