<template>
    <div class="body">
        <EnyataLogo>

        </EnyataLogo>

        <nav>
            <router-link to="/">Home</router-link> 
            <router-link to="/login">Sign in</router-link>
        </nav>
  
    </div>
</template>

<script>
    export default {
        name: 'NavBar',
        
    }
</script>

<style scoped>
.body   {
    /* background: blue; */
    padding-top: 50px;
    padding-left: 133px;
    padding-right: 133px;
    font-family: 'Poppins', sans-serif;
}

div{
    
    display: flex;
    justify-content: space-between;
}

nav{
    /* background: green; */
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 40px;
}

nav a{
    text-decoration: none;
    font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: rgba(33, 31, 38, 0.71);
}

</style>