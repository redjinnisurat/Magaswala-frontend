<template>
  <h5 class="heading">Know about us</h5>
    <div class="container">
      
    
      <div class="row">
        <div class="left">
           <img src="@/assets/dham.png" alt="">
        </div>
        <div class="right">
          <div class="content">
          <p>Lorem ipsum dolor sit amet,<br> consetetur sadipscing elitr,<br> sed diam nonumy eirmod<br> tempor invidunt ut labore et<br> dolore magna aliquyam<br> erat, sed diam voluptua. At<br> vero eos et accusam et<br> justo duo dolores et ea<br> rebum. Stet clita kasd<br> gubergren, no sea takimata<br> sanctus est Lorem ipsum</p>
        </div>
        </div>
      </div>
   </div>
</template>

<script>
export default{
    name: "KnowAboutUs",
}
</script>

<style scoped>
body{
  width: 100%;
  min-height: 100vh;
  display: grid;
}
.container{
  margin-left: 5em;
  margin-top: 1.5em;
}
.heading{
  font-weight: bold;
  font-size: 2em;
  margin-left: 30em;
  margin-top: 2em;
}
.row{
  width: 110%;
  max-width: 1170em;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px 30px;
}
.row .left{
  overflow: hidden;
}
.row .left img{
  /* width: 30em; */
  height: 29em;
  max-width: 100%;
  /* max-height: 100%; */
}
.row .right{
  display: flex;
  align-items: center;
}
.row .right .content{
  margin-left: -2em;
}
.row .right .content p{
  font-size: 34px;
  font-weight: 500;
  font: normal normal medium 55px/83px Poppins;
  letter-spacing: 0px;
  color: #262626;
  opacity: 1;
  /* line-height: 0px; */
  /* top: 1888px;
left: 986px;
width: 794px;
height: 916px; */
}

@media screen and (max-width: 2340px) {
  .heading{
    margin-left: 2em;
  }
  .container{
    width: 100%;
    margin-left: auto;
  }
  .row .left img{
    width: 60em;
    height: 40em;
  }
  .right .content p{
    font-size: 50px;
  }
}

@media screen and (max-width: 990px) {
  .heading{
    margin-left: 1em;
    font-size: 50px;
  }
  .container{
    margin-left: 1em;
    width: 100%;
  }
  .row{
    width: 85em;
  }
  .row .left img{
    width: 100%;
    height: 100%;
  }
    .row .right .content{
        padding-left: 0;
        
    }
    .row .right .content p{
      font-size: 50px;
    }
}

@media screen and (max-width: 790px) {
    .row .left img{
        width: 100%;
    }
    /* .row{
        width: 90%;
        grid-template-columns: 1fr;
    } */
}

@media screen and (max-width: 690px) {
  .row{
    width: 100em;
  }
}

@media screen and (max-width: 590px) {
  .heading{
    margin-left: 6em;
  }
  .container{
    margin-left: 9em;
    margin-top: 3em;
    width: 100em;
  }
  .row{
    width: 100em;
  }
}
@media screen and (max-width: 490px) {
  .haeding{
    width: 15em;
    font-size: 3em;
    margin-left: 3em;
  }
}
@media screen and (max-width: 390px) {
  .container{
    margin-left: 8em;
  }
}
</style>