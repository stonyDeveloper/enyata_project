<template>
    <button :style="{ 'width': width + 'px', 'height': height + 'px', 'border-radius': border + 'px'}">{{ buttonText }}</button>
</template>

<script>
    export default {
        name:"ButtonComponent",
        props:{
            buttonText:{
                type: String,
                default: () => "Label"  
            },
            width: {
                type: String 
            },
            height: {
                type: String 
            },
            border: {
                type: String 
            }
           
        }
        
    }
</script>

<style scoped>
button {
   
    background: #7557D3;
    color: #fff;
    border: none;
    font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;

}

</style>