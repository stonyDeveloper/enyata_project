<template>
    <div v-if="loaded">
        <p>Timer</p>
        <p>{{ displayMinutes }}<span>min</span>{{ displaySeconds}}<span>sec</span></p>
        
    </div>
</template>

<script>
    export default {
  name: 'CountDownComponent',
  props:["year", "month", "date", "hour", "minute", "second", "millisecond"],
  data () {
    return { 
      displayMinutes: 0,
      displaySeconds: 0,
      loaded: false,
      expired: false
    }
  },
  computed: {
    _seconds(){
        return 1000
    },
    _minutes(){
        return this._seconds * 60
    },
    _hours(){
        return this._minutes * 60
    },
    _days(){
        return this._hours * 24
    },
    end(){
        return new Date(
            this.year,
            this.month,
            this.date,
            this.hour,
            this.minute,
            this.second,
            this.millisecond
            
            
        )
    }
  },
  mounted(){
    this.showRemaining();
  },
  methods: {
    showRemaining(){
        const timer = setInterval(() => {
           const now = new Date();
        //    const end = new Date(2022, 9, 17, 10, 10, 10, 10 );
           const distance = this.end.getTime() - now.getTime(); 

           if(distance <= 0){
                this.expired = true;
                clearInterval(timer);
                return;
           }
        //    const days = Math.floor(distance / this._days);
        //    const hours = Math.floor((distance % this._days) / this._hours);
           const minutes = Math.floor((distance % this._hours) / this._minutes);
           const seconds = Math.floor((distance % this._minutes) / this._seconds);
           this.displayMinutes = minutes < 10 ? "0" + minutes : minutes;
           this.displaySeconds = seconds < 10 ? "0" + seconds : seconds;
           this.loaded =  true;
        //    this.displayHours = hours < 10 ? "0" + hours : hours;
        //    this.displayDays = days < 10 ? "0" + days : days;
        }, 1000)
    }
  }
};
</script>

<style scoped>
p:first-child{
    font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;

color: #4F4F4F;
}

p:nth-of-type(2) {
  font-family: 'Lato';
font-style: normal;
font-weight: 300;
font-size: 48px;
line-height: 58px;
color: #2B3C4E;    
}

p:nth-of-type(2) span{
    font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
color: #4F4F4F;
}
</style>